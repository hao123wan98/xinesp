/**
 * 修改密码
 * */

var express = require('express');
var router = express.Router();
var changePwd = require('../controllers/changePwd');
var auth = require('../common/auth');

router.use(auth.authUser);

router.get('/',changePwd.index);

router.post('/save',changePwd.save);

module.exports = router;
