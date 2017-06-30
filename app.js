var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var common = require('./routes/common');
var login = require('./routes/login');
var home = require('./routes/home');

var changePwd = require('./routes/changePwd');
var companyManagement = require('./routes/companyManagement');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(session({
        secret: '12345',
        name: 'esp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
        resave: false,
        saveUninitialized: true,
        rolling: true
    })
);


app.use('/', index);

app.use('/common', common);
app.use('/login', login);
app.use('/home', home);
app.use('/changePwd', changePwd);

app.use('/companyManagement', companyManagement);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
