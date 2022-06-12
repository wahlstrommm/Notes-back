var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const PlaintextPassword = 'admin';
let userName = 'admin';
// router.get('/', function (req, res, next) {});

router.post('/login', async function (req, res, next) {
  const hash = bcrypt.hashSync(PlaintextPassword, saltRounds);
  let userNameFromInput = req.body.userName;

  try {
    if (userNameFromInput == userName && (await bcrypt.compareSync(req.body.userPassword, hash))) {
      res.json('Lyckad inloggad');
    } else {
      res.json('felaktig information');
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/newDoc', function (req, res, next) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let heading = req.body.heading;
    let content = req.body.content;
    let created = req.body.created;
    let sql = ` INSERT  INTO notes (heading, content,created,last_changed,deleted) VALUES ("${heading}","${content}","${created}","${created}","${0}")`;
    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }

      let docID = result.insertId.toString();
      res.json(docID);
      res.status(201);
    });
  });
});

router.put('/updateDoc:id', function (req, res, next) {
  let id = parseInt(req.params.id);

  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let heading = req.body.heading;
    let content = req.body.content;
    let last_changed = req.body.last_changed;
    let sql = ` UPDATE notes SET heading = "${heading}", content = '${content}',last_changed = "${last_changed}",deleted = "${0}" WHERE id=${id}`;
    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log(' result ', result);
    });
  });
  res.json(req.body.id);
});
module.exports = router;
