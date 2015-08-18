/**
 * Created by Administrator on 2015/8/7.
 */
var page_flag=1;
var page_choosen=1;

var page=new Array();
page[0] = new Object();
page[0].id =1;
page[0].pgbgclr = "#F1F1F1";
page[0].items = new Array();

function add_menu(){
    $("#addMenu").bind("click",function(){
        page_flag++;
        var k=$("#title").find("li").length-2;
        var b1=$("#title").find(".menu").eq(k);
        var a1=$("#title").find(".menu").eq(k).clone();
        a1.attr("id","page"+page_flag);
        a1.find(".bicon").hide();
        a1.find(".icon").show();
        a1.find(".icon").removeAttr("src");
        a1.find(".bicon").removeAttr("src");
        a1.find(".bicon").attr("src","img/bicon.jpg");
        page[page_flag - 1] = new Object();
        page[page_flag - 1].id = page_flag-0;
        page[page_flag - 1].pgbgclr = "#F1F1F1";
        page[page_flag - 1].items = new Array();

        a1.bind("click",function(){
            $("#page"+page_choosen).find(".icon").show();
            $("#page"+page_choosen).find(".bicon").hide();
            $(this).find(".icon").hide();
            $(this).find(".bicon").show();
                read_model();
                page[page_choosen - 1].items = item;
                console.log(page[page_choosen - 1].items);
                item=[];
                p912_flag=0;
                p913_flag=0;
                emptyAll();
                page_choosen = $(this).attr("id").substring(4);
                //console.log(page[page_choosen - 1]);
                reShow(page[page_choosen - 1]);
                console.log(page_choosen);


        })

        b1.after(a1);
        menu[page_flag-1]=new Object();
        menu[page_flag-1].id=page_choosen-0;
        menu[page_flag-1].name=a1.find("p").html();

    })

}

//当前全部模板图片总数
function setMenuPreview(){
    var m = $(".stl_Choose_tool");

    var imgs0 = m.find(".localImag").eq(0)
    var pres0 = m.find(".preview").eq(0);
    var docs0 = m.find(".doc").eq(0);
    var masks0 = m.find(".mask").eq(0);
    
    var imgs1 = m.find(".localImag").eq(1)
    var pres1 = m.find(".preview").eq(1);
    var docs1 = m.find(".doc").eq(1);
    var masks1 = m.find(".mask").eq(1);



    imgs0.attr("id","iconlocalImag");
        pres0.attr("id","iconpreview");
        docs0.attr("id","icondoc");
        masks0.attr("id","iconmask");

    imgs1.attr("id","biconlocalImag");
    pres1.attr("id","biconpreview");
    docs1.attr("id","bicondoc");
    masks1.attr("id","biconmask");

    $("#iconmask").bind("click",function(){
        $(this).next().click();
    });
    $("#icondoc").attr("onchange","javascript:setImagePreview('icondoc','iconpreview','iconlocalImag');uploadImg(this)");
    $("#biconmask").bind("click",function(){
        $(this).next().click();
    });
    $("#bicondoc").attr("onchange","javascript:setImagePreview('bicondoc','biconpreview','biconlocalImag');uploadImg(this)");

}