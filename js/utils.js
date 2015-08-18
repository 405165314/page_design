/**
 * Created by Administrator on 2015/8/10.
 */
function emptyAll(){
    $("#model_field").empty();
    $(".current_tool ul").empty();
    $(".model_order ul").empty();
    num=0;
    imgnum=0;
    $("#model_field").css("height","970");
}
function reShow(page){
    console.log("reshow");
    if(!page) return;
    var items = page.items;
    if(!items) return;
    console.log("reshow2222");
    for(var i=0;i<items.length;i++){
        var model = items[i].model;
        //console.log(model);
/*        var m = 900+model;
        $("#p"+m).click();*/
        switch (model){
            case 1: add901();break;
            case 2: add902();break;
            case 4: add904();break;
            case 5: add905();break;
            case 6: add906();break;
            case 7: add907();break;
            case 11: add911();break;
            case 12: add912();break;
            case 13: add913();break;
        }
    }
    function add901(){
        $("#p901").click();
        var m = $("#model_field li:last");
        var t = $(".current_tool ul li:last");

        m.children().css("background-color",items[i].bgclr);
        m.find(".title_p901 input").val(items[i].title).css("color",items[i].color);
        m.find("img").eq(0).attr("src",items[i].left.icon);
        m.find("img").eq(1).attr("src",items[i].right.icon);

        t.find(".p901_color").val(items[i].color.substring(1)).css("background-color",items[i].color);
        t.find(".p901_bgclr").val(items[i].bgclr.substring(1)).css("background-color",items[i].bgclr);

        $(t.find(".p901_entry")[0]).val(items[i].left.model);
        $(t.find(".p901_entry")[1]).val(items[i].right.model);
    }
    function add902(){
        $("#p902").click();
        var m = $("#model_field li:last");
        var t = $(".current_tool ul li:last");

        m.find(".model_902_title input").css("color",items[i].color).val(items[i].title);
        m.children().css("background-color",items[i].bgclr);
        m.find("img").attr("src",items[i].icon);
        t.find(".p902_color").val(items[i].color.substring(1)).css("background-color",items[i].color);
        t.find(".p902_bgclr").val(items[i].bgclr.substring(1)).css("background-color",items[i].bgclr);

    }
    function add904(){
        $("#p904").click();
        var m = $("#model_field > li:last");
        var t = $(".current_tool ul li:last");

        m.children().css("background-color",items[i].bgclr);
        t.find(".p904_bgclr").val(items[i].bgclr.substring(1)).css("background-color",items[i].bgclr);

        var minputs = m.find(".model_904_title input");
        var micons = m.find(".model_904_icon img");
        var tinputs = t.find(".color_float_div input");
        var sels = t.find("select");
        for(var n=0;n<4;n++){
            $(minputs[n]).val(items[i].items[n].title).css("color",items[i].items[n].color);
            $(micons[n]).attr("src",items[i].items[n].icon);
            $(tinputs[n]).val(items[i].items[n].color.substring(1)).css("background-color",items[i].items[n].color);
            $(sels[n]).val(items[i].items[n].model);
        }
    }
    function add905(){
        $("#p905").click();
        var m = $("#model_field > li:last");
        var t = $(".current_tool ul li:last");

        var minputs = m.find("input");
        var mdesc = m.find("textarea");
        var tdesc = t.find(".p905_desclr");
        var sels = t.find("select");

        for(var n=0;n<5;n++){
            $(minputs[n]).val(items[i].items[n].title).css("color",items[i].items[n].color);
            t.find(".p905_color_"+n).val(items[i].items[n].color.substring(1)).css("background-color",items[i].items[n].color);

            m.find(".model_905_cell"+n).css("background-color",items[i].items[n].bgclr);
            t.find(".p905_bgclr_"+n).val(items[i].items[n].bgclr.substring(1)).css("background-color",items[i].items[n].bgclr);
            mdesc.html(items[i].items[n].desc).css("color",items[i].items[n].desclr);
            $(sels[n]).val(items[i].items[n].model);
        }
        tdesc.val(items[i].items[0].desclr.substring(1)).css("background-color",items[i].items[0].desclr);
    }
    function add906(){
        $("#p906").click();
        var m = $("#model_field > li:last");
        var t = $(".current_tool ul li:last");

        var minputs = m.find(".model_906_title input");
        var micons = m.find(".model_906_icon img");
        var sels = t.find("select");
        for(var n=0;n<3;n++){
            $(minputs[n]).val(items[i].items[n].title).css("color",items[i].items[n].color);
            $(micons[n]).attr("src",items[i].items[n].icon);
            t.find(".p906_color_"+n).val(items[i].items[n].color.substring(1)).css("background-color",items[i].items[n].color);
            $(sels[n]).val(items[i].items[n].model);
        }

    }

    function add907(){
        $("#p907").click();
        var m = $("#model_field > li:last");
        var n = m.attr("id").substring(1);
        //console.log(n);
        var t = $(".current_tool ul li:last");
        var l = items[i].items.length;
        for(var j=0;j<l;j++)
        {
            var  m907= m.children();
            m907.find(".preview:last").attr("id", "preview" +n+move_num);
            m907.find(".doc:last").attr("id", "doc" +n+move_num);

            var last_doc = m.find(".doc:last");
            last_doc.attr("onchange","javascript:setImagePreview('doc"+n+move_num+"','preview"+n+move_num+"','localImag');uploadImg(this);addimg(this);");

            //console.log(last_doc);
            addimg(last_doc.get(0));
            last_doc.next().next().attr("src",items[i].items[j].img);
        }


    }
    function add911(){
        $("#p911").click();
        var m = $("#model_field > li:last");
        var t = $(".current_tool ul li:last");
        var sels = t.find("select");

        for(var n=0;n<2;n++){
            $(m.find(".model_911_title input")[n]).val(items[i].items[n].title).css("color",items[i].items[n].color);
            $(m.find(".model_911_desc input")[n]).val(items[i].items[n].desc).css("color",items[i].items[n].desclr);
            $(m.find(".model_911_icon img")[n]).attr("src",items[i].items[n].icon);

            t.find(".p911_color_"+n).val(items[i].items[n].color.substring(1)).css("background-color",items[i].items[n].color);
            t.find(".p911_desclr_"+n).val(items[i].items[n].desclr.substring(1)).css("background-color",items[i].items[n].desclr);
            $(sels[n]).val(items[i].items[n].model);

        }
    }
    function add912(){
        var l = items[i].items.length;
        for(var n=0;n<l;n++){
            $("#p912").click();
            var m = $("#model_field > li:last");
            var t = $(".current_tool ul li:last");
            var sel = t.find("select");

            m.find(".model_912_img img").attr("src",items[i].items[n].icon);
            m.find(".model_912_title input").val(items[i].items[n].title).css("color",items[i].items[n].color);
            m.find(".model_912_desc input").val(items[i].items[n].desc).css("color",items[i].items[n].desclr);
            m.find(".model_912_price input").val(items[i].items[n].price/100);
            m.find(".model_912_picon img").attr("src",items[i].items[n].picon);
            m.find(".model_912_pnum input").val(items[i].items[n].pnum);

            t.find(".p912_color").val(items[i].items[n].color.substring(1)).css("background-color",items[i].items[n].color);
            t.find(".p912_desclr").val(items[i].items[n].desclr.substring(1)).css("background-color",items[i].items[n].desclr);
            sel.val(items[i].items[n].model);
        }

    }
    function add913(){
        var l = items[i].items.length;
        for(var n=0;n<l;n++){
            $("#p913").click();
            var m = $("#model_field > li:last");
            var t = $(".current_tool ul li:last");
            var sel = t.find("select");

            m.find(".model_913_img img").attr("src",items[i].items[n].icon);
            m.find(".model_913_title input").val(items[i].items[n].title).css("color",items[i].items[n].color);
            m.find(".model_913_desc textarea").html(items[i].items[n].desc).css("color",items[i].items[n].desclr);
            m.find(".model_913_picon img").attr("src",items[i].items[n].picon);
            m.find(".model_913_pnum input").val(items[i].items[n].pnum);

            t.find(".p913_color").val(items[i].items[n].color.substring(1)).css("background-color",items[i].items[n].color);
            t.find(".p913_desclr").val(items[i].items[n].desclr.substring(1)).css("background-color",items[i].items[n].desclr);
            sel.val(items[i].items[n].model);
        }

    }
}
function validatePrice(price){

}