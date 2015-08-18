/**
 * Created by Administrator on 2015/7/28.
 */

//$(document).ready(function(){
//    /*$("#top").bind("click",function(){
//        reShow(page);
//    });*/
//});
//上移，点击为num2
function model_up(){
    var li = $(this).parent().parent();
    //console.log(li.attr("id"));
    //console.log(li.prev().attr("id"));
    var num1=li.prev().attr("id");
    var num2=li.attr("id");
    if(typeof(num1) == "undefined") return;
    exchange(li.prev(),li);
    exchange($("#t"+num1),$("#t"+num2));
    exchange_model(num1,num2);
    rebind();
    rebindPreview(num1,num2);
}
//下移，点击为num1
function model_down(){
    var li = $(this).parent().parent();
    //console.log(li.attr("id"));
    //console.log(li.next().attr("id"));
    var num1=li.attr("id");
    var num2=li.next().attr("id");
    if(typeof(num2) == "undefined") return;
    exchange(li,li.next());
    exchange($("#t"+num1),$("#t"+num2));
    exchange_model(num1,num2);
    rebind();
    rebindPreview(num1,num2);
}
//上下顺序调整按钮和列表选中的重新绑定
function rebind(){
    $(".model_up").unbind("click");
    $(".model_up").bind("click",model_up);
    $(".model_down").unbind("click");
    $(".model_down").bind("click",model_down);
    var lis = $(".model_order ul li");
    lis.each(function(){
        $(this).unbind("click");
        $(this).click(bindChangeCurrent);
    });
    binddel();
}
//模板交换
function exchange_model(num1,num2){
    var p = $("#m"+num1);
    var n = $("#m"+num2);

    if(typeof(p)=="undefined") return;
    if(typeof(n)=="undefined") return;
    exchange(p,n);
}
//列表交换
function exchange(a,b){
    var temp=a.clone();
    temp.insertAfter(b);
    a.remove();
}

//工具栏入口
var num=0;
function addIndex(name){

    var iframes=$("#model_field > li");
    $(iframes[iframes.length-1]).attr("id","m"+num);


    var ul=$(".model_order ul");

    var li=$(".li_hidden").clone();
    li.attr("id",iframes.length-1);
    li.children(".model_order_txt").html($(name).html());
    li.attr("class","");
    li.click(bindChangeCurrent);
    $(".model_order ul li").attr("class","");
    li.addClass("model_order_sel");

    ul.append(li);
    rebind();
    addCurrentTool(name);
    changeCurrentTool(num);
    jscolor.init();
    setPreview(num);
    bindChangeColor();

    if(name=="#p907"){
        bind907(num);
    }
    binddel();
    num++;

    var h = $("#model_field").css("height");
    h = h.slice(0,-2)-0+260;
    $("#model_field").css("height", h+"px");
}
//顺序列表选中绑定
function bindChangeCurrent(){
    $(".model_order ul li").attr("class","");
    $(this).addClass("model_order_sel");
    changeCurrentTool($(this).attr("id"));
}
//增加当前选中的工具
function addCurrentTool(name){
    var n = name.substring(2);

    var tools = $(".tool_"+n).clone();
    tools.attr("class","tool"+n);
    tools.attr("id","t"+num);
    $(".current_tool ul").append(tools);

}
//设置顺序列表选中效果
function changeCurrentTool(id){
    var tools = $(".current_tool ul li");
    for(var i=0;i<tools.length;i++){
        $(tools[i]).hide();
    }
    $(tools[id]).show();
}
var imgnum=0;//当前全部模板图片总数
function setPreview(n){
    var m = $("#m"+n);

    var imgs = m.find(".localImag");
    var pres = m.find(".preview");
    var docs = m.find(".doc");
    var masks = m.find(".mask");

    for(var i=0;i<imgs.length;i++){
        $(imgs[i]).attr("id","localImag"+imgnum);
        $(pres[i]).attr("id","preview"+imgnum);
        $(docs[i]).attr("id","doc"+imgnum);
        $(docs[i]).attr("onchange","javascript:setImagePreview('doc"+imgnum+"','preview"+imgnum+"','localImag"+imgnum+"');uploadImg(this)");
        $(masks[i]).attr("id","mask"+imgnum);

        $("#mask"+imgnum).bind("click",function(){
            $(this).next().click();
        });
        imgnum++;
    }

}
//复制交换后重新绑定该模板图片的点击
function rebindPreview(num1,num2){
    setPreview(num1);
    if($("#m"+num1).children().attr("class").search("907")!=-1){
        rebind907(num1);
    }
    if($("#m"+num2).children().attr("class").search("907")!=-1){
        rebind907(num2);
    }
};

function bindChangeColor(){

    $(".current_tool").find(".color").each(function(){
        $(this).unbind("blur");
        $(this).bind("blur",colorChange);
    });

    function colorChange(){
        var value = $(this).val();
        var classnames = $(this).attr("class").split(" ")[1].split("_");
        var mid = classnames[0].substring(1);
        var attr = classnames[1];
        var attri = classnames[2];
        var lid = $(this).parents("li").attr("id").charAt(1);
/*      console.log(mid);
        console.log(attr);
        console.log(attri);
        console.log(lid);*/
        var m = $("#m"+lid);

        switch(mid){
            case "901": handle901();break;
            case "902": handle902();break;
            case "904": handle904();break;
            case "905": handle905();break;
            case "906": handle906();break;
            case "911": handle911();break;
            case "912": handle912();break;
            case "913": handle913();break;
        }

        function handle901(){
            switch(attr){
                case "color": m.find(".title_p901").children().css("color","#"+value);break;
                case "bgclr": m.children().css("background-color","#"+value);break;
            }
        };
        function handle902(){
            switch(attr){
                case "color": m.find(".model_902_title").children().css("color","#"+value);break;
                case "bgclr": m.children().css("background-color","#"+value);break;
            }
        };
        function handle904(){
            switch(attr){
                case "color": $(m.find(".model_904_title")[attri]).children().css("color","#"+value);break;
                case "bgclr": m.children().css("background-color","#"+value);break;
            }
        }
        function handle905(){
            switch(attr) {
                case "color": m.find(".model_905_cell"+attri+" input").css("color", "#" + value);break;
                case "bgclr": m.find(".model_905_cell"+attri).css("background-color", "#" + value);break;
                case "desclr": m.find(".model_905_left_desc").children().css("color", "#" + value);break;
            }
        }
        function handle906(){
            switch(attr){
                case "color":$(m.find(".model_906_title")[attri]).children().css("color", "#" + value);break;
            }
        }
        function handle911(){
            switch(attr){
                case "color": $(m.find(".model_911_title")[attri]).children().css("color","#"+value);break;
                case "desclr": $(m.find(".model_911_desc")[attri]).children().css("color","#"+value);break;
            }
        }
        function handle912(){
            switch(attr){
                case "color": m.find(".model_912_title").children().css("color","#"+value);break;
                case "desclr": m.find(".model_912_desc").children().css("color","#"+value);break;
            }
        }
        function handle913(){
            switch(attr){
                case "color": m.find(".model_913_title").children().css("color","#"+value);break;
                case "desclr": $(m.find(".model_913_desc").children()[0]).css("color","#"+value);break;
            }
        }


    }
}
//单独处理图片轮播栏P907的绑定
var move_num=0;
function bind907(n) {


    var  m907= $("#m"+n).children();

    m907.find(".mask_907").unbind("click");
    m907.find(".mask_907").bind("click", bt);
    function bt() {

        m907.find(".preview:last").attr("id", "preview" +n+move_num);
        m907.find(".doc:last").attr("id", "doc" +n+move_num);

        var last_doc = $(this).parent().find(".doc:last");

        last_doc.click();
        last_doc.attr("onchange","javascript:setImagePreview('doc"+n+move_num+"','preview"+n+move_num+"','localImag');uploadImg(this);addimg(this);");
    }

};
//参数d是.mask_907
function addimg(d){
    //增加新图片
    move_num++;
    var n = $(d).parents(".model_p907").parent().attr("id").substring(1);
    console.log(n);
    var newli = $(d).parents(".slider_move").clone();

    newli.find(".preview").attr("id", "preview" +n+move_num);
    newli.find(".doc").attr("id", "doc" +n+move_num).removeAttr("onchange");
    newli.find("form").attr("id",Math.floor(Math.random()*3000));
    newli.show();

    var imgul = $(d).parents(".sli_p907");
    imgul.append(newli);

    //增加新按钮
    var first_nav = $(d).parents(".model_p907").find("._nav:first");
    var new_nav = first_nav.clone().show().attr("id","nav" + move_num);
    first_nav.parent().append(new_nav);

    var imgs = imgul.attr("id").substring(3);

    //按钮切换
    var gg=100*imgs;
    $("#nav" +move_num).bind("click",function(){
        $(d).parents(".sli_p907").animate({marginLeft:"-"+gg+"%"},600);

    });
    imgs++;
    imgul.attr("id","img"+imgs);

    //添加二级编号select
    var hiddenSel = $("#t"+n).find(".p913_entry_hidden");
    var newSel = hiddenSel.clone().css("display","block").removeClass("p913_entry_hidden");
    newSel.insertBefore(hiddenSel);
}
//重新绑定模板907下方按钮
function rebind907(n){
    bind907(n);
    var imgul =$("#m"+n).find(".sli_p907");
    var imgs = imgul.attr("id").substring(3);

    var navs = $("#m"+n).find("._nav");

    for(var i=1;i<navs.length;i++){
        (function(i) {
            $(navs[i]).unbind("click");
            $(navs[i]).bind("click", function () {
                imgul.animate({marginLeft: "-" + (i-1)*100 + "%"}, 600);

            });
            imgs++;
            //imgul.attr("id","img"+imgs);
        })(i);
    }
}
function binddel(){
    $(".model_order").find(".model_del_icon").each(function(){

        $(this).unbind("click");
        $(this).bind("click",function(){
            console.log("click");
            var thisli = $(this).parents("li");
            var lid = thisli.attr("id");
            thisli.remove();
            $("#m"+lid).remove();
            $("#t"+lid).remove();
            num--;

            var ms = $("#model_field > li");
            var ts = $(".current_tool").children().children("li");
            var lis = $(".model_order").children().children("li");

            for(var i=0;i<ms.length;i++){
                console.log(i);
                $(ms[i]).attr("id","m"+i);
                $(ts[i]).attr("id","t"+i);
                $(lis[i]).attr("id",i);
            }
            $(lis[ms.length-1]).click();
            if(ms.length==0) $(".current_tool").children().children().remove();

        });
    });




}
