/**
 * 公共部分  头部和侧边导航
 * */


var express = require('express');
var router = express.Router();
var auth = require('../common/auth');
router.use(auth.authUser);


var home = require('../controllers/home');
router.get('/', home.index);

module.exports = router;
