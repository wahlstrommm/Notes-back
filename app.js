var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

const mysql = require('mysql2');
const Color = require('color');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var showAllDocs = require('./routes/showAllDocs');
var docs = require('./routes/docs');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/showAllDocs', showAllDocs);
app.use('/docs', docs);
// // create the connection to database
app.locals.con = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'notes_admin',
  password: 'notes_admin',
  database: 'notes',
});
module.exports = app;
