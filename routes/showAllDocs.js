var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

/* GET home page. */
router.get('/', function (req, res, next) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM notes; `;
    req.app.locals.con.query(sql, function (err, result) {
      res.send(result);
    });
  });
});
router.post('/:id', function (req, res, next) {
  let id = req.params.id;
  let sql = ` UPDATE notes SET deleted = "${1}" WHERE id=${id}`;
  req.app.locals.con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(' result ', result);
  });

  res.send('Du försökte radera..');
});

router.get('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);

  let sql = ` SELECT * FROM notes WHERE id=${id}`;
  req.app.locals.con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(' result ', result);
    res.send(result);
  });
});

router.post('/updated/:id', function (req, res, next) {
  let heading = req.body.heading;
  let content = req.body.content;
  let last_changed = req.body.last_changed;
  let id = parseInt(req.params.id);

  let sql = ` UPDATE notes SET heading ="${heading}",content='${content}',last_changed="${last_changed}",deleted="${0}"  WHERE id=${id}`;
  req.app.locals.con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(' result ', result);
    res.send(result);
  });
});

module.exports = router;
