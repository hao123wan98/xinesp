/**
 * Created by bai on 2016/12/6.
 */

function showPwdEdit() {
$('.edit-changePwd').removeClass('edit-changePwd-hide');
        $("#oldPwd").val('');
        $("#newPwd1").val('');
        $("#newPwd2").val('');
}
function hidePwdEdit() {
$('.edit-changePwd').addClass('edit-changePwd-hide');
}

function savePwd(){
    var oldPwd  = $("#oldPwd").val();
    var newPwd1 = $("#newPwd1").val();
    var newPwd2 = $("#newPwd2").val();

    if(oldPwd == ''){
        $("#oldPwd-hint").html('请填写密码');
        return false;
    }
    if(newPwd1 == ''){
        $("#newPwd1-hint").html('请填写密码');
        return false;
    }
    if(newPwd2 == ''){
        $("#newPwd2-hint").html('请填写密码');
        return false;
    }
    if(newPwd1 != newPwd2){
        $("#newPwd2-hint").html('两次密码不一致');
        return false;
    }

    zhenhr.post('/changePwd/save',{"newPwd":newPwd1,"oldPwd":oldPwd},true,function(data){
        if(data.code==10000){
            zhenhr.showMsg('修改密码成功');
            $('.edit-changePwd').addClass('edit-changePwd-hide');
            gotoMainNav()
1
        }else{
            zhenhr.showMsg(data.msg);
        }
    });
}

$("#oldPwd").on('focus' , function(){

    $("#oldPwd-hint").html('');
});
$("#newPwd1").on('focus' , function(){
    $("#newPwd1-hint").html('');
});

$("#newPwd2").on('focus' , function(){

    $("#newPwd2-hint").html('');
});


