
function changeInner(url) {
    jQuery.ajax({
        async:false,
        url: url,
        cache: false,
        success: function (data) {
            $("#page-inner").html(data);
        },
        error: function () {
            alert("fail");
        }
    });
}

function doLogin() {
    alert('go to login');
}



function conditionQuery() {

    var fd = new FormData();
    fd.append("code", $("#sealCode").val());
    fd.append("name", $("#sealName").val());
    fd.append("unit", $("#unitName").val());

    var sealBodyDiv = $("#sealLBody");
    jQuery.ajax({
        async: false,
        type: "post",
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
        url: "/seal/querySealList",
        success: function (data) {
            if (null == data) console.warn("空");
            else if (0 == data.code) {
                var divStr= "";
                var list = data.list;
                for (var i = 0; i < list.length; i++) {
                    divStr += "<tr>"
                        + "<td>" + (i + 1) + "</td>"
                        + "<td>" + list[i].code + "</td>"
                        + "<td>" + list[i].name + "</td>"
                        + "<td>" + list[i].type + "</td>"
                        + "<td>" + list[i].unit + "</td>"
                        + "<td>" + list[i].lp + "</td>"
                        + "<td>" + list[i].st + "</td>"
                        + "<td>" + list[i].pic + "</td>"
                        + "<td>" + " [详细信息][下载 ?] " + "</td>"
                        + "</td>";
                }
                sealBodyDiv.html(divStr);

            }

        },
        error: function () {
            alert("fail");
        }


    });

}


/* 清除模态框缓存 */
$('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
});



