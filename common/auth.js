/**
 * Created by bai on 16-11-28.
 */
var session = require('express-session');
var tokenFun = require('../common/token');

exports.authUser = function (req, res, next) {
    if (req.session.email == null || req.session.token == null) {
        res.send('<script>window.location.href="/login"</script>');
        return;
    }

    if (req.session.token != tokenFun.getToken(req.session.email)) {
        res.send('<script>window.location.href="/login"</script>');
    }
    else {
        return next();
    }

};
