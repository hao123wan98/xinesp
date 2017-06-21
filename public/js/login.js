$("#login-btn").on("click", function () {
    var email = $("#email").val();
    var pwd = $("#pwd").val();

    //if (!email) {
    //    email = 'guoyong.shi@zhenhr.com';
    //}
    //if (!pwd) {
    //    pwd = '123456';
    //}

    if (email == '') {
        $(".hint-email").html('登录邮箱不能为空');
        $(".hint-email").show();
        return false;
    }
    if (pwd == '') {
        $(".hint-pwd").html('密码不能为空');
        $(".hint-pwd").show();
        return false;
    }

    zhenhr.post(
        '/login/doLogin',
        {email: email, pwd: pwd},
        true,
        function (data) {
            if (data.code == 10000) {
                localStorage.setItem('email', email);

                //下载操作权限
                setRoleMenus(data.data);
                window.location.href = '/';
            } else if (data.code == 40000) {
                $(".hint-pwd").html(data.msg);
                $(".hint-pwd").show();

            } else {
                $(".hint-email").html(data.msg);
                $(".hint-email").show();
            }
        });
});

function setRoleMenus(data) {
    localStorage.setItem("roleId", data.roleId);
    var tmp = JSON.stringify(data.menuList);
    localStorage.setItem("menuList", tmp);
}


$(document).ready(function () {

    $("#email").val(localStorage.getItem('email'));
    //$("#pwd").val(localStorage.getItem('pwd'));
    $(document).keyup(function (evnet) {
        if (evnet.keyCode == '13') {
            $("#login-btn").click();
        }
    });

});