var queryString = require('querystring');
var config = require('../config/config');
var BufferHelper = require('bufferhelper');
var http = require('http');


/**
 * 文件下载
 * @param req
 * @param res
 */

exports.downloadFile = function (url, params, fn, req, res) {
    var contents = queryString.stringify(params);
    var options = {
        host: config.api_host,
        port: config.api_port,
        path: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': contents.length,
            'token': req.session.token
        }
    };
    var bufferHelper = new BufferHelper();
    var reqPost = http.request(options, function (resPost) {
        resPost.on('data', function (chunk) {
            bufferHelper.concat(chunk);
        });
        resPost.on('end', function () {
            try {
                var steam = bufferHelper.toBuffer();
                var fileName = encodeURI(fn, "UTF-8");
                res.set({
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': 'attachment;filename="' + fileName + '";filename*=utf-8' + "''" + fileName
                });
                res.send(steam);
            } catch (e) {
                // console.log(e);
                res.send({code: 50000, msg: '服务器错误'});
            }
        });
    });
    reqPost.write(contents);
    reqPost.end();
    reqPost.on('error', function (e) {
        res.send({code: 50000, msg: '服务器错误'});
    })
}



