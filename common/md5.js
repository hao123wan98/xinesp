var crypto = require('crypto');
/**
 *@param   str 字符串
 @param   key 秘钥
 */
exports.md5= function md5(str,key){
    var decipher = crypto.createHash('md5',key);
    if(key){
        return decipher.update(str).digest()
    }
    return decipher.update(str).digest('hex')
};
