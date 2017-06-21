/**
 * 登录
 * */


var express = require('express');
var router = express.Router();

var common = require('../controllers/common');

/* GET home page. */

router.get('/alertShow', common.showAlertView);

module.exports = router;
