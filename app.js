var createError = require('http-errors');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const history = require('connect-history-api-fallback')
const cfg = require('./cfg/cfg');
const pg = require('./playGround');

if (!cfg) {
  console.error('./cfg/cfg.js file not exists');
  process.exit(1);
}

var app = express();

if(cfg.web.cors) app.use(require('cors')());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'fe', 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api'));
app.use(history());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ success: false, msg: err.message });
});

mongoose.connect(cfg.db.url, { useNewUrlParser: true }, (err) => {
  if (err) return console.error(err);
  console.log('mongoose connected');
  pg.test.model();
});

module.exports = app;
