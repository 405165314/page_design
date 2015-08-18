/**
 * Created by Administrator on 2015/8/6.
 */
//图片url二维数组保存
var img_url = new Array();
//图片数量标记，减少到0时说明已完成所有图片上传
var img_s = 0;
$(document).ready(function(){

    /*$(".save").bind("click",function(){
        console.log("click");
        upload_img(read_model);
    });*/


});
function upload_img(callback){
        console.log("start to upload");

        var models = $("#model_field > li");

        for(var i=0;i<models.length;i++){
            var forms = $(models[i]).find("form");
            if($(models[i]).children().attr("class").search("907")!=-1) forms.length--;//907模板最后一个input是预留的，不上传
            img_url[i] = new Array();
            for(var j=0;j<forms.length;j++) {
                img_s++;
                //console.log(forms[j]);
                (function(i,j){
                    var formData = new FormData(forms[j]);
                    $.ajax({
                        url: 'http://localhost:8080/O2O/file/img?token=789',
                        type: 'POST',
                        data: formData,
                        processData: false,  // 告诉jQuery不要去处理发送的数据
                        contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
                        success: function (data) {
                            var d = eval("(" + data + ")");
                            console.log(i, j, d.url);
                            console.log(img_s);
                            img_url[i][j] = d.url;
                            img_s--;
                            if(img_s<=0) callback();
                        }
                    });
                })(i,j);
            }
        }
        //setTimeout("console.log(img_url)",1000);
}


function uploadImg(doc){
    var form = $(doc).parent();
    //console.log(form.find("img").attr("src"));
    var formData = new FormData(form.get(0));
    $.ajax({
        url: 'http://localhost:8080/O2O/file/img?token=789',
        type: 'POST',
        data: formData,
        processData: false,  // 告诉jQuery不要去处理发送的数据
        contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
        success: function (data) {
            var d = eval("(" + data + ")");
            form.find("img").attr("src", d.url);
        }
    });
}

