var config = require('../config/config');
var BufferHelper = require('bufferhelper');
var http = require('http');
var session = require('express-session');
var tokenFun = require('../common/token');
var queryString = require('querystring');


/*
 * post 请求
 */

exports.post = function (urlPath, contents, req, res, fun) {
    if (contents == null) {
        contents = '';
    }

    //console.log("receive quest post:", urlPath, " content:", contents);

    var headerValue;
    if (req.session.token != null) {
        headerValue = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': contents.length,
            'token': req.session.token
        };
    }
    else {
        headerValue = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': contents.length
        };
    }

    var options = {
        host: config.api_host,
        port: config.api_port,
        path: urlPath,
        method: 'POST',
        headers: headerValue
    };

    var bufferHelper = new BufferHelper();
    var reqPost = http.request(options, function (resPost) {
        resPost.on('data', function (chunk) {
            bufferHelper.concat(chunk);
        });
        resPost.on('end', function () {
            var data;
            try {
                data = JSON.parse(bufferHelper.toBuffer().toString());
                if (data.code == '90000') {
                    req.session.token = null;
                    tokenFun.setToken(req.session.email, null);
                }
            } catch (e) {
                console.log(e);
                data = {code: 50000, msg: '服务器错误'};
            }

            if (typeof(fun) == 'undefined') {
                return data;
            } else {
                fun(data);
            }
        });
        reqPost.on('error', function (e) {
            console.error(e);
            var data = {code: 50000, msg: '服务器错误'};
            if (typeof(fun) == 'undefined') {
                return data;
            } else {
                fun(data);
            }
        });
    });

    reqPost.write(contents);
    reqPost.end();

};

exports.postWithCompanyId = function (urlPath, contents, req, res, fun) {

    if (contents == null) {
        contents = '';
    }

    var companyId = req.session.companyId;
    if (companyId != undefined) {
        var newContent = Object.assign({}, contents, {companyId: companyId});
        contents = newContent;
    }
    contents = queryString.stringify(contents);


    //console.log("receive quest postWithCompanyId:", urlPath, " content:", contents);

    var headerValue;
    if (req.session.token != null) {
        headerValue = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': contents.length,
            'token': req.session.token
        };
    }
    else {
        headerValue = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': contents.length
        };
    }


    var options = {
        host: config.api_host,
        port: config.api_port,
        path: urlPath,
        method: 'POST',
        headers: headerValue
    };

    var bufferHelper = new BufferHelper();
    var reqPost = http.request(options, function (resPost) {
        resPost.on('data', function (chunk) {
            bufferHelper.concat(chunk);
        });
        resPost.on('end', function () {
            var data;
            try {
                data = JSON.parse(bufferHelper.toBuffer().toString());
                if (data.code == '90000') {
                    req.session.token = null;
                    tokenFun.setToken(req.session.email, null);
                }
            } catch (e) {
                console.log(e);
                data = {code: 50000, msg: '服务器错误'};
            }

            if (typeof(fun) == 'undefined') {
                return data;
            } else {
                fun(data);
            }
        });
        reqPost.on('error', function (e) {
            console.error(e);
            var data = {code: 50000, msg: '服务器错误'};
            if (typeof(fun) == 'undefined') {
                return data;
            } else {
                fun(data);
            }
        });
    });

    reqPost.write(contents);
    reqPost.end();

};


/*
 * get 请求
 */


exports.get = function (urlPath, contents, req, res, fun) {
    var headerValue;

    if (contents != null && contents != '') {
        headerValue = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': contents.length,
            'token': req.session.token
        };
    }
    else {
        headerValue = {
            'token': req.session.token
        };
    }

    //console.log("receive quest get:", urlPath, " content:", contents);


    var options = {
        host: config.api_host,
        port: config.api_port,
        path: urlPath,
        method: 'GET',
        headers: headerValue
    };

    var bufferHelper = new BufferHelper();
    var reqGet = http.request(options, function (resGet) {
        resGet.on('data', function (chunk) {
            bufferHelper.concat(chunk);
        });
        resGet.on('end', function () {
            var data;
            try {
                data = JSON.parse(bufferHelper.toBuffer().toString());

                //console.log(data);

                if (data.code == '90000') {
                    req.session.token = null;
                    tokenFun.setToken(req.session.email, null);
                }
            } catch (e) {
                console.log(e);
                data = {code: 50000, msg: '服务器错误'};
            }

            if (typeof(fun) == 'undefined') {
                return data;
            } else {
                fun(data);
            }
        });

        reqGet.on('error', function (e) {
            console.error(e);
            var data = {code: 50000, msg: '服务器错误'};
            if (typeof(fun) == 'undefined') {
                return data;
            } else {
                fun(data);
            }
        });

    });

    if (contents != null) {
        reqGet.write(contents);
    }

    reqGet.end();

}


exports.getWithCompanyId = function (urlPath, contents, req, res, fun) {
    var headerValue;

    var companyId = req.session.companyId;
    if (companyId != undefined) {
        var index = urlPath.toString().indexOf('?');
        if (index < 0) {
            urlPath = urlPath + "?companyId=" + companyId;
        }
        else {
            urlPath = urlPath + "&companyId=" + companyId;
        }

    }

    //console.log("receive quest getWithCompanyId:", urlPath, " content:", contents);

    if (contents != null && contents != '') {
        headerValue = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': contents.length,
            'token': req.session.token
        };
    }
    else {
        headerValue = {
            'token': req.session.token
        };
    }


    var options = {
        host: config.api_host,
        port: config.api_port,
        path: urlPath,
        method: 'GET',
        headers: headerValue
    };

    var bufferHelper = new BufferHelper();
    var reqGet = http.request(options, function (resGet) {
        resGet.on('data', function (chunk) {
            bufferHelper.concat(chunk);
        });
        resGet.on('end', function () {
            var data;
            try {
                data = JSON.parse(bufferHelper.toBuffer().toString());
                if (data.code == '90000') {
                    req.session.token = null;
                    tokenFun.setToken(req.session.email, null);
                }
            } catch (e) {
                console.log(e);
                data = {code: 50000, msg: '服务器错误'};
            }

            if (typeof(fun) == 'undefined') {
                return data;
            } else {
                fun(data);
            }
        });

        reqGet.on('error', function (e) {
            console.error(e);
            var data = {code: 50000, msg: '服务器错误'};
            if (typeof(fun) == 'undefined') {
                return data;
            } else {
                fun(data);
            }
        });

    });

    if (contents != null) {
        reqGet.write(contents);
    }

    reqGet.end();

}
