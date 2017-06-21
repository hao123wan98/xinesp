var httpRequest = require('../common/httpRequest');

exports.index = function (req, res) {
    res.render('home/index.ejs', {title: '首页'});
};




