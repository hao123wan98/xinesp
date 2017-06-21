var queryString = require('querystring');

var md5 = require('../common/md5');
var tokenFun = require('../common/token');
var httpRequest = require('../common/httpRequest');


exports.index = function (req, res) {
    res.render('login/index.ejs', {title: "登录"});
}

exports.showNav = function (req, res) {
    res.render('nav.ejs', {title: "导航"});
};
exports.showHeader = function (req, res) {
    res.render('common/index.ejs', {title: "头部"});
};

exports.doLogin = function (req, res) {
    var email = req.param('email');
    var pwd = req.param('pwd');

    req.session.email = email;
    req.session.pwd = pwd;

    pwd = md5.md5(pwd);
    var contents = queryString.stringify({email: email, pwd: pwd});

    httpRequest.post("/user/login", contents, req, res, function (data) {
        if (data.code == '10000') {
            req.session.token = data.data.token;
            req.session.companyId = -1;
            tokenFun.setToken(req.session.email, data.data.token);
        }
        res.send(data);

    });

};

exports.doLogout = function (req, res, next) {
    httpRequest.post('/user/logout', null, req, res, function (data) {
        req.session.token = null;
        tokenFun.setToken(req.session.email, null);
        res.redirect('/login');
    });

};



