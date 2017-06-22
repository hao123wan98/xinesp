//时间转换
function getTimeFormat(data, type) {
// 将当前时间换成时间格式字符串
    var newDate = new Date();
    newDate.setTime(data);
    switch (type) {

        case 1:
            return newDate.toDateString();           //'"Sun Jan 18 1970"');
        case 2:
            return newDate.toJSON();             //"1970-01-18T04:52:53.199Z");
        case 3:
            return newDate.toLocaleDateString();  //"1970/1/18");
        case 4:
            return newDate.toLocaleString();           //"1970/1/18 下午12:52:53");
        case 5:
            return newDate.toLocaleTimeString();       //"下午12:52:53");
        case 6:
            return newDate.toUTCString();     //"Sun, 18 Jan 1970 04:52:53 GMT");
        case 7:
            Date.prototype.format = function (newDate) {
                var date = {
                    "M+": this.getMonth() + 1,
                    "d+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "q+": Math.floor((this.getMonth() + 3) / 3),
                    "S+": this.getMilliseconds()
                };
                if (/(y+)/i.test(newDate)) {
                    newDate = newDate.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                for (var k in date) {
                    if (new RegExp("(" + k + ")").test(newDate)) {
                        newDate = newDate.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                    }
                }
                return newDate;
            };
            return newDate.format('yyyy-MM-dd h:m:s');
        case 8:
            Date.prototype.format = function (newDate) {
                var date = {
                    "M+": this.getMonth() + 1,
                    "d+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "q+": Math.floor((this.getMonth() + 3) / 3),
                    "S+": this.getMilliseconds()
                };
                if (/(y+)/i.test(newDate)) {
                    newDate = newDate.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                for (var k in date) {
                    if (new RegExp("(" + k + ")").test(newDate)) {
                        newDate = newDate.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                    }
                }
                return newDate;
            }
            return newDate.format('yyyy-MM-dd');
    }


};
//将日期字符串转换成周几
function weektrision(str, type) {
    var dataStr = str || '';
    var weekDay = [];
    if (type == '周') {
        weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    } else {
        weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    }
    var myDate = new Date(Date.parse(dataStr.replace(/-/g, "/")));
    return weekDay[myDate.getDay()];


}

//职位转换
function typePosition(data) {
    switch (data) {
        case 0:
            return '无设置';

        case 1:
            return '专员';

        case 2:
            return 'P1 Leader';

        case 3:
            return 'P1 Manager';

        case 10:
            return '顾问';

        case 11:
            return 'p2 Leader';

        case 12:
            return 'P2 Manager';

        case 20:
            return '主管';
    }
};
function entryType(data) {
    var str = parseInt(data);
    switch (str) {
        case 0:
            return '未填写';

        case 1:
            return '全职';


        case 2:
            return '顾问';

        case 3:
            return '实习生';

        case 4:
            return '兼职';

        case 5:
            return '其它';
    }
};

function stateOffer(data) {
    var str = parseInt(data)
    switch (str) {

        case 1:
            return '未发送';//拒绝 重发

        case 2:
            return '已发送';//拒绝 重发

        case 3:
            return 'offer阶段拒绝';

        case 4:
            return '已接受';

        case 5:
            return '已入职';

        case 6:
            return '已失效';//拒绝 重发
        case 7:
            return '入职阶段拒绝';//拒绝 重发


    }
};
//性别转换  1男2女
function genderType(data) {
    var str = parseInt(data)
    switch (str) {

        case 2:
            return '女士';

        case 1:
            return '先生';


    }
};
//怀孕类型  0否 1 是
function pregnantFlag(data) {
    var str = parseInt(data)
    switch (str) {

        case 1:
            return '怀孕中';

        case 0:
            return '未怀孕';


    }
};
//户籍类型  户籍 ：0:未选择 1 本地城镇 2 本地农业 3 外埠城镇  4 外埠农业
function residenceType(data) {
    var str = parseInt(data)
    switch (str) {

        case 0:
            return '未选择';

        case 1:
            return '本地城镇';

        case 2:
            return '本地农业';

        case 3:
            return '外埠城镇';

        case 4:
            return '外埠农业';

    }
};
//任务状态
function stateTask(data) {
    var str = parseInt(data)
    switch (str) {

        case 0:
            return '无效';

        case 1:
            return '完成';

        case 2:
            return '未完成';
    }
};

//审批状态
function stateReview(data) {
    var str = parseInt(data)
    switch (str) {

        case 0:
            return '未审批';

        case 1:
            return '审批已提交';

        case 2:
            return '审批通过';
        case 3:
            return '审批未通过';
    }
};


//入职状态
function entryState(data) {
    var str = parseInt(data)
    switch (str) {
        case 5:
            return '已入职';

        case 3:
            return 'offer阶段放弃';
        case 7:
            return '待入职阶段放弃';
    }
};
//服务类型转换
function getServiceContent(str) {
    switch (str) {
        case "P1-A":
            return '易人事现场支持服务';

        case "P1-B":
            return '易人事远程支持服务';
        case "A":
            return '易人事现场支持服务';

        case "B":
            return '易人事远程支持服务';

    }
};

//企业模板  文件类型
function classicName(data) {
    var str = parseInt(data)
    switch (str) {
            case 1:return '入职模板';
            case 2:return '转正模板';
            case 3:return '调岗调薪模板';
            case 4:return '离职模板';
            case 5:return '招聘模板';
            case 6:return '自定义模板';
    }
};
//企业模板  所属类型
function fileType(data) {
    var str = parseInt(data)
    switch (str) {
            case 1: return 'word';
            case 2: return 'pdf';
            case 3: return 'excel';
            case 4: return 'ppt'
    }
};

