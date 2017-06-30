/**
 * 获取数据
 * @param flag
 */
var mPageNo = 1;

/**
 * 获取数据
 * @param flag
 */
function getData(flag) {
    var data = {'pageNo': mPageNo, 'size': 20, 'reviewState': flag};
    zhenhr.getJson('/companyManagement/list', data, null, function (ret) {
        $('tbody').html('');

        console.log('data', ret)

        dataList = ret.data.list || [];
        var trArr = [];

        if (ret.data) {
            dataList.map(function (item, index) {
                var str = showWaitingHtml(item, index);
                trArr.push(str);
            });
            trArrStr = trArr.join('');
            $('tbody').html(trArrStr);
        }
    });

}

function showWaitingHtml(item, index) {
    var dateTime = '';
    if (item.createTime != null) {
        dateTime = getTimeFormat(item.createTime, 7);
    }

    var opHtml = '<td> ' + '<div class="btn-group"> ' +
        '<button type="button" onclick="distribute(' + index + ')" class="btn btn-default blue"> 查看 ' +
        '</button> ' +
        '</div> ' + '</td> ';


    var str = '<tr>' +
        ' <td>' + (index + 1) + '  </td> ';

    str += '<td onclick="enterCompanyInfo(' + item.name + ')" style="cursor: pointer;color: blue"> ' + item.name + '</td> ';

    str += '<td> ' + item.tel + ' </td> ' +
        '<td>' + item.email + ' </td> ' +
        '<td>' + item.address + ' </td> ' +
        '<td>' + dateTime + ' </td> ';

    str = str + opHtml +
        '</tr>';
    return str;
}