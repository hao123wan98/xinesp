var queryString = require('querystring');

var httpRequest = require('../common/httpRequest');

exports.header = function (req, res) {
    res.render('index.ejs', {title: "头部"});
};


exports.showAlertView = function (req, res) {
    res.render('common/alert.ejs', {title: req.param('title'), id: req.param('id'), targetId: req.param('targetId')});
};

