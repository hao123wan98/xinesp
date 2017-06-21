/**
 * 登录
 * */


var express = require('express');
var router = express.Router();

var login = require('../controllers/login');

/* GET home page. */
router.get('/', login.index);

router.post('/doLogin', login.doLogin);
router.get('/doLogout', login.doLogout);

module.exports = router;
