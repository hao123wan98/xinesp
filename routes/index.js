var express = require('express');
var router = express.Router();

var home = require('../controllers/home');
var auth = require('../common/auth');


router.get('/', auth.authUser, home.index);
//router.get('/', home.index);

module.exports = router;
