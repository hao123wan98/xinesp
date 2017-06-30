/**
 * Created by tiantian on 17/3/28.
 */
var httpRequest = require('../common/httpRequest');

var http = require('http');
var queryString = require('querystring');
var session = require('express-session');

exports.index = function (req, res) {
    res.render('companyManagement/index.ejs', {title: '企业管理'});
};


exports.showNormal = function (req, res) {
    res.render('companyManagement/normal.ejs', {title: '企业列表'});
};

//待审核
exports.showWaitReview = function (req, res) {
    res.render('companyManagement/waitReview.ejs', {title: '待审核企业'});
};

//审核失败
exports.showReviewFailed = function (req, res) {
    res.render('companyManagement/reviewFailed.ejs', {title: '审核失败'});
};

//新建企业
exports.showNewCompany = function (req, res) {
    res.render('companyManagement/newCompany.ejs', {title: '新建企业'});
};


/**
 * 获取企业数据
 * @param req
 * @param res
 */
exports.list = function (req, res) {
    var contents = queryString.stringify(req.body);
    console.log(contents);
    httpRequest.get("/mcompany/list?" + contents, null, req, res, function (data) {
        res.send(data);
    });
};

//================入职========================
exports.entryList = function (req, res) {
    var contents = queryString.stringify(req.body);
    httpRequest.post("/employee/offer/entry/list", contents, req, res, function (data) {
        res.send(data);
    });
};



