/**
 * Created by Administrator on 2015/8/6.
 */
var menu=new Array();
menu[0]=new Object();
menu[0].id=1;
menu[0].name="首页";


function page_seting(){
    var g=$(".stl_Choose_tool_in").find("input").val();
    var i=$(".stl_Choose_tool_icon").find("img").attr("src");
    var bi=$(".stl_Choose_tool_bicon").find("img").attr("src");
    var c=$(".stl_Choose_tool_color").css("background-color");
    var bc=$(".stl_Choose_tool_bcolor").css("background-color");
    $("#page"+page_choosen).find(".icon").attr("src",i);
    $("#page"+page_choosen).find(".bicon").attr("src",bi);
    $("#page"+page_choosen).find("p").html(g);
    $("#page"+page_choosen).find("p").css("color",c);


    menu[page_choosen-1].id=page_choosen-0;
    menu[page_choosen-1].name=g;
    menu[page_choosen-1].color=RGBToHex(c);
    menu[page_choosen-1].bcolor=RGBToHex(bc);
    menu[page_choosen-1].icon=i;
    menu[page_choosen-1].bicon=bi;

}

function page_delete(){
    if(page_choosen!=1) {
        $("#page" + page_choosen).remove();

        menu.splice(page_choosen - 1, 1);
    }
    emptyAll();

}