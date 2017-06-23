var httpRequest = require('../common/httpRequest');
var queryString = require('querystring');
var md5 = require('../common/md5');
var tokenFun = require('../common/token');

exports.index = function (req, res) {

    res.render('changePwd/index.ejs',
        {title: '密码管理', email: req.session.email, pwd: req.session.pwd});
};


exports.save = function (req, res, next) {
    var oldPwd = req.param('oldPwd');
    var newPwd = req.param('newPwd');
    oldPwd = md5.md5(oldPwd);
    newPwd = md5.md5(newPwd);

    var contents = queryString.stringify({'oldPwd': oldPwd, 'newPwd': newPwd});
    httpRequest.post('/muser/pwd/change', contents, req, res, function (data) {
        if (data.code == '10000') {
            var token = data.data.token;
            req.session.token = token;
            tokenFun.setToken(req.session.email, token);
        }
        res.send(data);
    });
};
