/**
 * Created by Administrator on 2015/7/27.
 */
$(document).ready(function() {
    $(".small").bind("mouseover",function(){

        $(this).animate({opacity:'0.4'},400);
    });
    $(".small").bind("mouseout",function(){

        $(this).css({opacity:'1.0'});
        $(this).stop();
    });


        $("#p901").bind("mouseover",function(){


                $("#detail_model").show("0", function () {
                    $(this).animate({
                        "background-position-x": "0px",
                        "background-position-y": "0px"
                    }, 400);
                    $("#cover_01").animate({
                        opacity: '0.4',
                        backgroundColor: "black",
                        height: "19px",
                        float: "left"
                    }, 400);
                    $("#cover_02").animate({
                        opacity: '0.0',
                        backgroundColor: "white",
                        height: "45px",
                        float: "left"
                    }, 400);
                    $("#cover_03").animate({
                        opacity: '0.4',
                        backgroundColor: "black",
                        height: "906px",
                        float: "left"
                    }, 400);
                    $("#cover_01").show();
                    $("#cover_02").show();
                    $("#cover_03").show();
                });
                $("#p901").bind("mouseout", function () {
                    event.stopPropagation();
                    $stop();
                })


        });
        $("#p902").bind("mouseover",function(){

                $("#detail_model").show("0", function () {
                    $("#detail_model").animate({
                        "background-position-x": "0px",
                        "background-position-y": "-240px"
                    }, 400);
                    $("#cover_01").animate({
                        opacity: '0.4',
                        backgroundColor: "black",
                        height: "54px",
                        float: "left"
                    }, 400);
                    $("#cover_02").animate({
                        opacity: '0.0',
                        backgroundColor: "white",
                        height: "36px",
                        float: "left"
                    }, 400);
                    $("#cover_03").animate({
                        opacity: '0.4',
                        backgroundColor: "black",
                        height: "880px",
                        float: "left"
                    }, 400);
                    $("#cover_01").show();
                    $("#cover_02").show();
                    $("#cover_03").show();

                });
                $("#p902").bind("mouseout", function () {
                    event.stopPropagation();
                    $stop();
                })


        });
        $("#p904").bind("mouseover",function() {
            $("#detail_model").show("0", function () {
                $("#detail_model").animate({
                    "background-position-x": "0px",
                    "background-position-y": "-35px"
                }, 400);
                $("#cover_01").animate({opacity: '0.4', backgroundColor: "black", height: "160px", float: "left"}, 400);
                $("#cover_02").animate({opacity: '0.0', backgroundColor: "white", height: "89px", float: "left"}, 400);
                $("#cover_03").animate({opacity: '0.4', backgroundColor: "black", height: "721px", float: "left"}, 400);
                $("#cover_01").show();
                $("#cover_02").show();
                $("#cover_03").show();


            });
            $("#p904").bind("mouseout", function () {
                event.stopPropagation();
                $stop();
            });
        });
        $("#p905").bind("mouseover",function(){
            $("#detail_model").show("0", function () {
            $("#detail_model").animate({
                "background-position-x":"0px",
                "background-position-y":"-687px"
            } ,400);
            $("#cover_01").animate({opacity:'0.4',backgroundColor:"black",height:"240px",float:"left"},400);
            $("#cover_02").animate({opacity:'0.0',backgroundColor:"white",height:"147px",float:"left"},400);
            $("#cover_03").animate({opacity:'0.4',backgroundColor:"black",height:"583px",float:"left"},400);
            $("#cover_01").show();
            $("#cover_02").show();
            $("#cover_03").show();


        });
        $("#p905").bind("mouseout",function(){
            event.stopPropagation();
            $stop();
        });
        })
        $("#p906").bind("mouseover",function(){
            $("#detail_model").show("0", function () {
            $("#detail_model").animate({
                "background-position-x":"0px",
                "background-position-y":"-1241px"
            } ,400);
            $("#cover_01").animate({opacity:'0.4',backgroundColor:"black",height:"320px",float:"left"},400);
            $("#cover_02").animate({opacity:'0.0',backgroundColor:"white",height:"102px",float:"left"},400);
            $("#cover_03").animate({opacity:'0.4',backgroundColor:"black",height:"548px",float:"left"},400);
            $("#cover_01").show();
            $("#cover_02").show();
            $("#cover_03").show();


        });
        $("#p906").bind("mouseout",function(){
            event.stopPropagation();
            $stop();

        });
        })
        $("#p907").bind("mouseover",function(){
            $("#detail_model").show("0", function () {
            $("#detail_model").animate({
                "background-position-x":"0px",
                "background-position-y":"335px"
            } ,400);
            $("#cover_01").animate({opacity:'0.4',backgroundColor:"black",height:"400px",float:"left"},400);
            $("#cover_02").animate({opacity:'0.0',backgroundColor:"white",height:"130px",float:"left"},400);
            $("#cover_03").animate({opacity:'0.4',backgroundColor:"black",height:"440px",float:"left"},400);
            $("#cover_01").show();
            $("#cover_02").show();
            $("#cover_03").show();


        });
        $("#p907").bind("mouseout",function(){
            event.stopPropagation();
            $stop();
        });})
        $("#p911").bind("mouseover",function() {
            $("#detail_model").show("0", function () {
                $("#detail_model").animate({
                    "background-position-x": "0px",
                    "background-position-y": "147px"
                }, 400);
                $("#cover_01").animate({opacity: '0.4', backgroundColor: "black", height: "480px", float: "left"}, 400);
                $("#cover_02").animate({opacity: '0.0', backgroundColor: "white", height: "136px", float: "left"}, 400);
                $("#cover_03").animate({opacity: '0.4', backgroundColor: "black", height: "354px", float: "left"}, 400);
                $("#cover_01").show();
                $("#cover_02").show();
                $("#cover_03").show();


            });
            $("#p911").bind("mouseout", function () {
                event.stopPropagation();
                $stop();

            });
        })
        $("#p912").bind("mouseover",function() {
            $("#detail_model").show("0", function () {
                $("#detail_model").animate({
                    "background-position-x": "0px",
                    "background-position-y": "40px"
                }, 400);
                $("#cover_01").animate({opacity: '0.4', backgroundColor: "black", height: "560px", float: "left"}, 400);
                $("#cover_02").animate({opacity: '0.0', backgroundColor: "white", height: "100px", float: "left"}, 400);
                $("#cover_03").animate({opacity: '0.4', backgroundColor: "black", height: "310px", float: "left"}, 400);
                $("#cover_01").show();
                $("#cover_02").show();
                $("#cover_03").show();


            });
            $("#p912").bind("mouseout", function () {
                event.stopPropagation();
                $stop();

            });
        })
        $("#p913").bind("mouseover",function() {
            $("#detail_model").show("0", function () {
                $("#detail_model").animate({
                    "background-position-x": "0px",
                    "background-position-y": "-126px"
                }, 400);
                $("#cover_01").animate({opacity: '0.4', backgroundColor: "black", height: "640px", float: "left"}, 400);
                $("#cover_02").animate({opacity: '0.0', backgroundColor: "white", height: "84px", float: "left"}, 400);
                $("#cover_03").animate({opacity: '0.4', backgroundColor: "black", height: "246px", float: "left"}, 400);
                $("#cover_01").show();
                $("#cover_02").show();
                $("#cover_03").show();


            });
            $("#p913").bind("mouseout", function () {
                event.stopPropagation();
                $stop();

            });
        })
        $("#p921").bind("mouseover",function() {
            $("#detail_model").show("0", function () {
                $("#detail_model").animate({
                    "background-position-x": "0px",
                    "background-position-y": "-356px"
                }, 400);
                $("#cover_01").animate({opacity: '0.4', backgroundColor: "black", height: "720px", float: "left"}, 400);
                $("#cover_02").animate({opacity: '0.0', backgroundColor: "white", height: "249px", float: "left"}, 400);
                $("#cover_03").animate({opacity: '0.4', backgroundColor: "black", height: "1px", float: "left"}, 400);
                $("#cover_01").show();
                $("#cover_02").show();
                $("#cover_03").show();


            });
            $("#p921").bind("mouseout", function (event) {

                event.stopPropagation();
                $stop();

            });
        })




    $("#model").bind("mouseout",function(){
        $("#detail_model").hide();
    });

    $("#p901").bind("click",function(){
        var a_1=$("#p_901");
        $("#model_field").append(a_1.clone());
        addIndex("#p901");
    });
    $("#p902").bind("click",function(){
        var a_1=$("#model_902");
        $("#model_field").append(a_1.clone());
        addIndex("#p902");

    });
    $("#p904").bind("click",function(){
        var a_1=$("#model_904");
        $("#model_field").append(a_1.clone());
        addIndex("#p904");
    });
    $("#p905").bind("click",function(){
        var a_1=$("#model_905");
        $("#model_field").append(a_1.clone());
        addIndex("#p905");
    });
    $("#p906").bind("click",function(){
        var a_1=$("#model_906");
        $("#model_field").append(a_1.clone());
        addIndex("#p906");
    });
    $("#p907").bind("click",function(){
        var a_1=$("#model_907");
        $("#model_field").append(a_1.clone());
        addIndex("#p907");
    });
    $("#p911").bind("click",function(){
        var a_1=$("#model_911");
        $("#model_field").append(a_1.clone());
        addIndex("#p911");
    });
    $("#p912").bind("click",function(){
        var a_2=$("#model_912");
        $("#model_field").append(a_2.clone());
        addIndex("#p912");
    });
    $("#p913").bind("click",function(){
        var a_2=$("#model_913");
        $("#model_field").append(a_2.clone());
        addIndex("#p913");
    });

    $(".history_page").bind("mouseover",function(){
        $(this).addClass("active_model");
    });
    $(".help_page").bind("mouseover",function(){
        $(this).addClass("active_model");
    });
    $(".current").bind("mouseover",function(){
        $(this).addClass("active_model");
    });
    $(".history_page").bind("mouseout",function(){
        $(this).removeClass("active_model");
    });
    $(".current").bind("mouseout",function(){
        $(this).removeClass("active_model");
    });
    $(".help_page").bind("mouseout",function(){
        $(this).removeClass("active_model");
    });


    $("#model_field,.tool,#top").bind("mouseover",function(){
    	$("#detail_model").css("display","none");
    });
    add_menu();

    setMenuPreview();
    $("#stl_Choose_tool_enter").bind("click",page_seting);
    $("#title").find(".menu").eq(0).bind("click",function(){
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
    });
    $("#stl_Choose_tool_delete").bind("click",page_delete);
    $(".save").bind("click",function(){
        read_model();
        page[page_choosen - 1].items = item;
        item=[];
        p912_flag=0;
        p913_flag=0;
        Json_transform();
    })
    $(".show_model").bind("click",function(){
        var bom_width=document.body.clientWidth;
        $("#model").toggle(600);
        $("#model").css("left",bom_width/2-332-180);
        $("#detail_model").css("left",bom_width/2-332);
        if($(".tool").css("right")=="-400px"){

            $(".tool").show();
            $(".tool").animate({right:'0px'},600);
        }
        else{
            $(".tool").animate({right:'-400px'},600,function(){
                $(".tool").hide();
            })
        }
    });



});



function $stop(){
    $("#detail_model").stop();
    $("#cover_01").stop();
    $("#cover_02").stop();
    $("#cover_03").stop();
    $("#cover_01").hide();
    $("#cover_02").hide();
    $("#cover_03").hide();
}