var tokenArr = {};
exports.setToken = function(tel,token){
    tokenArr[tel] = token;
};
exports.getToken = function(tel){
    if(typeof(tokenArr[tel]) == 'undefined'){
        return '';
    }else{
        return tokenArr[tel];
    }
};
