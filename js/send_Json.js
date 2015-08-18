/**
 * Created by Administrator on 2015/8/12.
 */

function Json_transform(){
    var sum=new Object();
    sum.token="Ckdf78gHdF";
    sum.menubgclr="#F1F1F1";
    sum.menu=new Array();
    sum.menu=menu;
    sum.page=new Array();
    sum.page=page;
    var json_sum=JSON.stringify(sum);
    //console.log(json_sum);
    $.ajax({
        url: "http://localhost:8080/Test/test",
        type: "POST",
        data: json_sum,
        /*success: function(data){
         var d=eval("("+data+")");
         console.log(d.url);
         }*/
    });
}