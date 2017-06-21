/**
 * Created by bai on 16-11-22.
 */


var zeroModalId = 0;
var zhenhr = {
        pageSize: 14,
        hash: {},
        baseData: {
            companyFieldData: [
                {id: 1, text: "健康医疗"},
                {id: 2, text: "生活服务"},
                {id: 3, text: "旅游"},
                {id: 4, text: "金融"},
                {id: 5, text: "信息安全"},
                {id: 6, text: "广告营销"},
                {id: 7, text: "数据服务"},
                {id: 8, text: "智能硬件"},
                {id: 9, text: "文化娱乐"},
                {id: 10, text: "网络招聘"},
                {id: 11, text: "分类信息"},
                {id: 12, text: "电子商务"},
                {id: 13, text: "移动互联网"},
                {id: 14, text: "企业服务"},
                {id: 15, text: "社交网络"},
                {id: 16, text: "教育培训"},
                {id: 17, text: "O2O"},
                {id: 18, text: "游戏"},
                {id: 19, text: "互联网"},
                {id: 20, text: "媒体"},
                {id: 21, text: "IT软件"},
                {id: 22, text: "通信"},
                {id: 23, text: "公关会展"},
                {id: 24, text: "房地产/建筑"},
                {id: 25, text: "汽车"},
                {id: 26, text: "供应链/物流"},
                {id: 27, text: "咨询/翻译/法律"},
                {id: 28, text: "采购/贸易"},
                {id: 29, text: "非互联网行业"}
            ],
            companyToolsData: [
                {id: 1, text: "Confluence"},
                {id: 2, text: "worktile"},
                {id: 3, text: "有道云"},
                {id: 4, text: "钉钉"},
                {id: 5, text: "企业微信"},
                {id: 6, text: "Tower"},
                {id: 7, text: "其他"}
            ],
            countryData: [
                {id: 1, text: "中国内地"},
                {id: 2, text: "港澳台"},
                {id: 3, text: "外籍"},
            ],
            companyPersonsData: [
                {id: 1, text: "1-30人"},
                {id: 2, text: "31-80人"},
            ],
            residenceData: [
                {id: 1, text: "本地城镇"},
                {id: 2, text: "本地农业"},
                {id: 3, text: "外埠城镇"},
                {id: 4, text: "外埠农业"}

            ],
            urgentContactRelation: [
                {id: 1, text: "其他"},
                {id: 2, text: "父母"},
                {id: 3, text: "夫妻"},
                {id: 4, text: "兄弟\姐妹"},
                {id: 5, text: "子女"}

            ],
            educateTop: [
                {id: 1, text: "中专、高中"},
                {id: 2, text: "大专"},
                {id: 3, text: "本科"},
                {id: 4, text: "研究生"},
                {id: 5, text: "博士"}

            ],
            agreementType: [
                {id: 1, text: "中专、高中"},
                {id: 2, text: "大专"},
                {id: 3, text: "本科"},
                {id: 4, text: "研究生"},
                {id: 5, text: "博士"}

            ],
            probationMonth: [
                {id: 0, text: "0个月"},
                {id: 1, text: "1个月"},
                {id: 2, text: "2个月"},
                {id: 3, text: "3个月"},
                {id: 4, text: "4个月"},
                {id: 5, text: "5个月"},
                {id: 6, text: "6个月"}
            ],
            leaveReason: [
                {id: 1, text: "个人原因"},
                {id: 2, text: "合同到期"},
                {id: 3, text: "协议离职"},
                {id: 4, text: "公司辞退"},
            ],
            nationData: [
                {id: 1, text: "汉族"},
                {id: 2, text: "壮族"},
                {id: 3, text: "满族"},
                {id: 4, text: "回族"},
                {id: 5, text: "苗族"},
                {id: 6, text: "维吾尔族"},
                {id: 7, text: "土家族"},
                {id: 8, text: "彝族"},
                {id: 9, text: "蒙古族"},
                {id: 10, text: "藏族"},
                {id: 11, text: "布依族"},
                {id: 12, text: "侗族"},
                {id: 13, text: "瑶族"},
                {id: 14, text: "朝鲜族"},
                {id: 15, text: "白族"},
                {id: 16, text: "哈尼族"},
                {id: 17, text: "哈萨克族"},
                {id: 18, text: "黎族"},
                {id: 19, text: "傣族"},
                {id: 20, text: "畲族"},
                {id: 21, text: "傈僳族"},
                {id: 22, text: "仡佬族"},
                {id: 23, text: "东乡族"},
                {id: 24, text: "高山族"},
                {id: 25, text: "拉祜族"},
                {id: 26, text: "水族"},
                {id: 27, text: "佤族"},
                {id: 28, text: "纳西族"},
                {id: 29, text: "羌族"},
                {id: 30, text: "土族"},
                {id: 31, text: "仫佬族"},
                {id: 32, text: "锡伯族"},
                {id: 33, text: "柯尔克孜族"},
                {id: 34, text: "达斡尔族"},
                {id: 35, text: "景颇族"},
                {id: 36, text: "毛南族"},
                {id: 37, text: "撒拉族"},
                {id: 38, text: "布朗族"},
                {id: 39, text: "塔吉克族"},
                {id: 40, text: "阿昌族"},
                {id: 41, text: "普米族"},
                {id: 42, text: "鄂温克族"},
                {id: 43, text: "怒族"},
                {id: 44, text: "京族"},
                {id: 45, text: "基诺族"},
                {id: 46, text: "德昂族"},
                {id: 47, text: "保安族"},
                {id: 48, text: "俄罗斯族"},
                {id: 49, text: "裕固族"},
                {id: 50, text: "乌孜别克族"},
                {id: 51, text: "门巴族"},
                {id: 52, text: "鄂伦春族"},
                {id: 53, text: "独龙族"},
                {id: 54, text: "塔塔尔族"},
                {id: 55, text: "赫哲族"},
                {id: 56, text: "珞巴族"}
            ],
        },
        get: function (url, async, fun) {
            var _this = this;
            $.ajax({
                type: "GET",
                async: async,
                url: url,
                dataType: 'text',
                error: function (XHR, textStatus, errorThrown) {
                    var result = {'code': 50000, 'msg': '服务器错误'};
                    if (typeof(fun) == 'undefined') {
                        return result;
                    } else {
                        fun(result);
                    }
                },
                success: function (result) {
                    if (result.code == 90000) {
                        zhenhr.showMsg(result.msg);
                        setTimeout(" window.location.href = '/login';", 2000);
                    }
                    else if (result.code == 40000) {
                        zhenhr.showMsg(result.msg);
                    }

                    if (typeof(fun) == 'undefined') {
                        return result;
                    } else {
                        fun(result);
                    }
                }
            });
        },
        getJson: function (url, data, async, fun) {
            var _this = this;
            $.ajax({
                type: "GET",
                async: async,
                url: url,
                data: data,
                dataType: 'json',
                error: function (XHR, textStatus, errorThrown) {
                    var result = {'code': 50000, 'msg': '服务器错误'};
                    if (typeof(fun) == 'undefined') {
                        return result;
                    } else {
                        fun(result);
                    }
                },
                success: function (result) {
                    if (result.code == 90000) {
                        zhenhr.showMsg(result.msg);
                        setTimeout(" window.location.href = '/login';", 2000);
                    }
                    else if (result.code != 10000) {
                        console.log(url);
                        zhenhr.showMsg(result.msg);
                    }

                    if (typeof(fun) == 'undefined') {
                        return result;
                    } else {
                        fun(result);
                    }
                }
            });
        },

        post: function (url, data, async, fun) {
            var _this = this;
            $.ajax({
                type: "POST",
                async: async,
                url: url,
                data: data,
                dataType: "json",
                error: function (XHR, textStatus, errorThrown) {
                    var result = {'code': 50000, 'msg': '请求错误'};
                    if (typeof(fun) == 'undefined') {
                        return result;
                    } else {
                        fun(result);
                    }
                },
                success: function (result) {
                    if (result.code == 90000) {
                        zhenhr.showMsg(result.msg);
                        setTimeout(" window.location.href = '/login';", 2000);
                    }
                    else if (result.code != 10000 && url != '/login/doLogin') {
                        console.log(url);
                        zhenhr.showMsg(result.msg);
                    }

                    if (typeof(fun) == 'undefined') {
                        return result;
                    } else {
                        return fun(result);
                    }
                }
            });
        },
        uploadFile: function (url, data, sign, funsuc, progressHandlingFunction) {
            var _this = this;
            $.ajax({
                cache: false,
                type: "POST",
                url: url,
                contentType: false,
                processData: false,
                data: data,
                xhr: function () {  // custom xhr
                    myXhr = $.ajaxSettings.xhr();
                    if (myXhr.upload && typeof(funsuc) != 'undefined') { // check if upload property exists
                        myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // for handling the progress of the upload
                    }
                    return myXhr;
                },

                // dataType:"json",
                error: function (XHR, textStatus, errorThrown) {
                    var result = {'code': 50000, 'msg': '服务器错误'};
                    if (typeof(uploadFailed) == 'undefined') {
                        return result;
                    } else {
                        uploadFailed(result);
                    }
                },
                success: function (result) {
                    if (typeof(funsuc) == 'undefined') {
                        return result;
                    } else {
                        return funsuc(result);
                    }
                }
            });
        },

        uploadFileToCos: function (file, funsuc, progressHandlingFunction) {
            var _this = this;
            //处理文件
            var ext = $("#" + file).val().replace(/.+\./, "");
            zhenhr.getJson('/fileUpload/sign?ext=' + ext, null, true, function (ret) {
                if (ret.code == 10000) {
                    var sign = ret.data.sign;
                    var url = ret.data.uploadUrl;
                    var formData = new FormData();
                    formData.append("filecontent", $("#" + file)[0].files[0]);
                    formData.append("op", 'upload');
                    $.ajax({
                        cache: false,
                        type: "POST",
                        url: url,
                        headers: {'Authorization': sign},
                        contentType: false,
                        processData: false,
                        data: formData,
                        xhr: function () {  // custom xhr
                            myXhr = $.ajaxSettings.xhr();
                            if (myXhr.upload && typeof(funsuc) != 'undefined') { // check if upload property exists
                                myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // for handling the progress of the upload
                            }
                            return myXhr;
                        },

                        // dataType:"json",
                        error: function (XHR, textStatus, errorThrown) {
                            var result = {'code': 50000, 'msg': '服务器错误'};
                            if (typeof(uploadFailed) == 'undefined') {
                                return result;
                            } else {
                                uploadFailed(result);
                            }
                        },
                        success: function (result) {
                            if (typeof(funsuc) == 'undefined') {
                                return result.data.source_url;
                            } else {
                                return funsuc(result.data.source_url);
                            }
                        }
                    });
                    return true;
                } else {
                    zhenhr.showMsg('获取签名失败');
                    return false;
                }
            });
        },

        uploadFolderFileToCos: function (file, content, funsuc, progressHandlingFunction) {
            var _this = this;
            //处理文件
            var ext = $("#" + file).val().replace(/.+\./, "");
            zhenhr.post('/fileUpload/sign/folder', content, true, function (ret) {
                if (ret.code == 10000) {
                    var sign = ret.data.sign;
                    var url = ret.data.uploadUrl;
                    var formData = new FormData();
                    formData.append("filecontent", $("#" + file)[0].files[0]);
                    formData.append("op", 'upload');
                    $.ajax({
                        cache: false,
                        type: "POST",
                        url: url,
                        headers: {'Authorization': sign},
                        contentType: false,
                        processData: false,
                        data: formData,
                        xhr: function () {  // custom xhr
                            myXhr = $.ajaxSettings.xhr();
                            if (myXhr.upload && typeof(funsuc) != 'undefined') { // check if upload property exists
                                myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // for handling the progress of the upload
                            }
                            return myXhr;
                        },

                        // dataType:"json",
                        error: function (XHR, textStatus, errorThrown) {
                            var result = {'code': 50000, 'msg': '服务器错误'};
                            if (typeof(uploadFailed) == 'undefined') {
                                return result;
                            } else {
                                uploadFailed(result);
                            }
                        },
                        success: function (result) {
                            if (typeof(funsuc) == 'undefined') {
                                return result.data.source_url;
                            } else {
                                return funsuc(result.data.source_url);
                            }
                        }
                    });
                    return true;
                } else {
                    zhenhr.showMsg('获取签名失败');
                    return false;
                }
            });
        },

        uploadPrivateFileToCos: function (file, funsuc, progressHandlingFunction) {
            var _this = this;
            //处理文件
            var ext = $("#" + file).val().replace(/.+\./, "");
            zhenhr.getJson('/fileUpload/sign/private?ext=' + ext + '&companyId=' + selCompanyId, null, true, function (ret) {
                if (ret.code == 10000) {
                    var sign = ret.data.sign;
                    var url = ret.data.uploadUrl;
                    var formData = new FormData();
                    formData.append("filecontent", $("#" + file)[0].files[0]);
                    formData.append("op", 'upload');
                    $.ajax({
                        cache: false,
                        type: "POST",
                        url: url,
                        headers: {'Authorization': sign},
                        contentType: false,
                        processData: false,
                        data: formData,
                        xhr: function () {  // custom xhr
                            myXhr = $.ajaxSettings.xhr();
                            if (myXhr.upload && typeof(funsuc) != 'undefined') { // check if upload property exists
                                myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // for handling the progress of the upload
                            }
                            return myXhr;
                        },

                        // dataType:"json",
                        error: function (XHR, textStatus, errorThrown) {
                            var result = {'code': 50000, 'msg': '服务器错误'};
                            if (typeof(uploadFailed) == 'undefined') {
                                return result;
                            } else {
                                uploadFailed(result);
                            }
                        },
                        success: function (result) {
                            if (typeof(funsuc) == 'undefined') {
                                return ret.data;
                            } else {
                                return funsuc(ret.data);
                            }
                        }
                    });
                    return true;
                } else {
                    zhenhr.showMsg('获取签名失败');
                    return false;
                }
            });
        },
        showMsg: function (Msg) {
            iosOverlay({
                text: Msg,
                duration: 2e3,
                icon: ""
            });
            return false;
        },

        showAlertView: function (title, id, targetId) {
            zeroModal.show(
                {
                    title: '提示',
                    unique: id,
                    url: '/common/alertShow?title=' + title + '&id=' + id + '&targetId=' + targetId,
                    overlayClose: true, //是否允许点击遮罩层直接关闭弹出层，默认否
                    width: '400px', //宽度（px、pt、%）
                    height: '200px', //高度（px、pt、%）
                    titleCenter: true,
                    opacity: 0.2, // 遮罩层的透明度
                    overlay: 'false' //是否需要显示遮罩层，默认true
                }
            )
        },

        view: function () {
            var hash = $.hash();
            var path = window.location.pathname.slice(1);
            var nav = hash.get('nav');
            if (typeof(hashurl[path]) != 'undefined') {
                if (typeof(nav) == 'undefined') {
                    nav = hashurl[path]['default'];
                }
                var url = hashurl[path][nav];
                if (typeof(url) != 'undefined') {
                    if ($("#" + nav).length > 0) {
                        $(".sub-nav-item").removeClass('on');
                        $("#" + nav).addClass('on');
                    }
                    var id = hash.get('id');
                    if (typeof(id) != 'undefined') {
                        url += '?id=' + id;
                    }
                    this.get(url, true, function (data) {
                        var obj = $(data);
                        obj.hide();
                        clearDate();
                        $("#sub-body").html(obj);
                        obj.slideDown(50);
                        $(".menu").css('height', 'auto');
                        var height = $(document).height() - 56;
                        $(".menu").css('height', height);
                        if ($.cookie('companyFlag') == 'false' && nav != 'company') {
                            showFirstSelect();
                        } else {
                            zeroModal.close(zeroModalId);
                        }
                        //底部demo数据悬浮提示
                        if ($.cookie('demoFlag') == 'true') {
                            $("#complete-float-div").css('display', 'block');
                            $("#sub-body").css('padding-bottom', '70px');
                        }

                    });
                } else {
                    zhenhr.showMsg('页面不存在');
                }
            } else {
                zhenhr.showMsg('页面不存在');
            }
        }
        ,
        formatCurrency: function (num) {
            var result = '';
            var str = (num || 0).toString().split(".");
            result = str[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
            if (typeof(str[1]) != 'undefined') {
                result = result + '.' + str[1];
            }
            return result;
        }
    }
    ;

function showMessagePanel() {
    $("#message-panel").show();
}
function closeMessagePanel() {
    $("#message-panel").hide();
}
function showMessageList() {
    window.location.href = '/message';
}
function clearDate() {
    $(".datepicker").remove();
}

// $(window).scroll(function (event) {
//     $(".menu").css('height', 'auto');
//     var height = $(document).height() - 56;
//     $(".menu").css('height', height);
// });

function showFirstSelect() {
    zeroModalId = zeroModal.show(
        {
            title: '欢迎来到ZhenHR人力资源系统',
            width: "630px",
            height: "400px",
            url: '/select',
            titleCenter: true,
            close: false,
            ok: false,
            cancel: false
        }
    );
}

function demo() {
    zhenhr.getJson('/demo', true, function (ret) {
        if (ret.code == 10000) {
            zhenhr.showMsg('操作成功');
            $.cookie('demoFlag', 'true');
            $.cookie('companyFlag', 'true');
            setTimeout(function () {
                zeroModal.close(zeroModalId);
                window.location.href = '/staff';
            }, 3000);
        } else {
            zhenhr.showMsg(ret.msg);
        }
    })

}

function emailVerify(value, itemName) {
    console.log(value + ':emailverify');
    var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (re.test(value)) {
        return true;
    } else {
        $("#" + itemName).find(".hint").html('格式错误');
        return false;
    }
}

