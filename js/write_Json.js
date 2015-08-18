/**
 * Created by Administrator on 2015/8/5.
 */



var item=new Array();

var p912_flag=0;
var p913_flag=0;


function read_model(){

    var r1=$("#model_field");
    var h;
    for(h=0;h<r1.children().length;h++) {
        var r2=new Array();
        var rary=new Array();
        r2[h]=r1.children().eq(h);
        rary[h] = r1.children().eq(h).children().eq(0).attr("class");
        switch (rary[h]){

            case "model_p901":p901_json(r2[h],h);break;
            case "model_902" :p902_json(r2[h],h);break;
            case "model_904" :p904_json(r2[h],h);break;
            case "model_905" :p905_json(r2[h],h);break;
            case "model_906" :p906_json(r2[h],h);break;
            case "model_p907" :p907_json(r2[h],h);break;
            case "model_911" :p911_json(r2[h],h);break;
            case "model_912" :p912_json(r2[h],h);break;
            case "model_913" :p913_json(r2[h],h);break;
        }

    }




}
//ģ��901���������������Ķ�ȡ�������ɶ���ķ���
function p901_json(lid,h){
    var inp=lid.find(".title_p901").children().eq(0);
    var p901_ary=new Array();
    p901_ary[h]=new Object();
    p901_ary[h].id=Number(page_choosen+"0"+h)+1;
    p901_ary[h].title=inp.val();
    p901_ary[h].model=1;
    var id_number=lid.attr("id").substring(1);

    p901_ary[h].left=new Object();
    p901_ary[h].left.icon=lid.find(".preview").eq(0).attr("src");
    console.log(p901_ary[h].left.icon);
    p901_ary[h].left.model=$("#t"+id_number).find(".p901_entry").eq(0).val()-0;

    p901_ary[h].right=new Object();
    p901_ary[h].right.icon=lid.find(".preview").eq(1).attr("src");
    p901_ary[h].right.model=$("#t"+id_number).find(".p901_entry").eq(1).val()-0;


    p901_ary[h].color=RGBToHex(inp.css("color"));
    p901_ary[h].bgclr=RGBToHex(lid.children().eq(0).css("background-color"));

    //console.log(p901_ary[h]);
    item[h]=new Object();
    item[h]=p901_ary[h];


}
//ģ��902��ҳ����������Ķ�ȡ�������ɶ���ķ���
function p902_json(lid,h){
    var inp=lid.find(".model_902_title").children().eq(0);
    var p902_ary=new Array();
    p902_ary[h]=new Object();
    p902_ary[h].id=Number(page_choosen+"0"+h)+1;
    p902_ary[h].model=2;
    p902_ary[h].title=inp.val();
    p902_ary[h].icon=lid.find(".preview").eq(0).attr("src");

    p902_ary[h].color=RGBToHex(inp.css("color"));
    p902_ary[h].bgclr=RGBToHex(lid.children().eq(0).css("background-color"));
    //console.log(p902_ary[h]);
    item[h]=new Object();
    item[h]=p902_ary[h];


}
//ģ��904��ͼ�굼�������Ķ�ȡ�������ɶ���ķ���
function p904_json(lid,h){
    var inp0=lid.find(".model_904_title").eq(0).children().eq(0);
    var inp1=lid.find(".model_904_title").eq(1).children().eq(0);
    var inp2=lid.find(".model_904_title").eq(2).children().eq(0);
    var inp3=lid.find(".model_904_title").eq(3).children().eq(0);
    var p904_ary=new Array();
    p904_ary[h]=new Object();
    p904_ary[h].id=Number(page_choosen+"0"+h)+1;
    p904_ary[h].model=4;
    p904_ary[h].bgclr=RGBToHex(lid.children().eq(0).css("background-color"));
    p904_ary[h].items=new Array();
    var id_number=lid.attr("id").substring(1);

    p904_ary[h].items[0]=new Object();
    p904_ary[h].items[1]=new Object();
    p904_ary[h].items[2]=new Object();
    p904_ary[h].items[3]=new Object();
    p904_ary[h].items[0].title=inp0.val();
    p904_ary[h].items[1].title=inp1.val();
    p904_ary[h].items[2].title=inp2.val();
    p904_ary[h].items[3].title=inp3.val();
    p904_ary[h].items[0].color=RGBToHex(inp0.css("color"));
    p904_ary[h].items[1].color=RGBToHex(inp1.css("color"));
    p904_ary[h].items[2].color=RGBToHex(inp2.css("color"));
    p904_ary[h].items[3].color=RGBToHex(inp3.css("color"));

    p904_ary[h].items[0].icon=lid.find(".preview").eq(0).attr("src");
    p904_ary[h].items[1].icon=lid.find(".preview").eq(1).attr("src");
    p904_ary[h].items[2].icon=lid.find(".preview").eq(2).attr("src");
    p904_ary[h].items[3].icon=lid.find(".preview").eq(3).attr("src");

    p904_ary[h].items[0].model=$("#t"+id_number).find(".p904_entry").eq(0).val()-0;
    p904_ary[h].items[1].model=$("#t"+id_number).find(".p904_entry").eq(1).val()-0;
    p904_ary[h].items[2].model=$("#t"+id_number).find(".p904_entry").eq(2).val()-0;
    p904_ary[h].items[3].model=$("#t"+id_number).find(".p904_entry").eq(3).val()-0;

    //console.log(p904_ary[h]);
    item[h]=new Object();
    item[h]=p904_ary[h];


}
//ģ��905����񵼺������Ķ�ȡ�������ɶ���ķ���
function p905_json(lid,h){
    var inp0_title=lid.find(".model_905_left_title").children().eq(0);
    var inp0_desc=lid.find(".model_905_left_desc").children().eq(0);
    var inp1=lid.find(".model_905_cell1").children().eq(0);
    var inp2=lid.find(".model_905_cell2").children().eq(0);
    var inp3=lid.find(".model_905_cell3").children().eq(0);
    var inp4=lid.find(".model_905_cell4").children().eq(0);
    var p905_ary=new Array();
    p905_ary[h]=new Object();
    p905_ary[h].id=Number(page_choosen+"0"+h)+1;
    p905_ary[h].model=5;

    p905_ary[h].items=new Array();

    var id_number=lid.attr("id").substring(1);

    p905_ary[h].items[0]=new Object();
    p905_ary[h].items[1]=new Object();
    p905_ary[h].items[2]=new Object();
    p905_ary[h].items[3]=new Object();
    p905_ary[h].items[4]=new Object();
    p905_ary[h].items[0].title=inp0_title.val();
    p905_ary[h].items[0].desc=inp0_desc.val();
    p905_ary[h].items[0].color=RGBToHex(inp0_title.css("color"));
    p905_ary[h].items[0].desclr=RGBToHex(inp0_desc.css("color"));
    p905_ary[h].items[0].bgclr=RGBToHex(lid.find(".model_905_cell0").css("background-color"));

    p905_ary[h].items[1].title=inp1.val();
    p905_ary[h].items[2].title=inp2.val();
    p905_ary[h].items[3].title=inp3.val();
    p905_ary[h].items[4].title=inp4.val();


    p905_ary[h].items[1].color=RGBToHex(inp1.css("color"));
    p905_ary[h].items[2].color=RGBToHex(inp2.css("color"));
    p905_ary[h].items[3].color=RGBToHex(inp3.css("color"));
    p905_ary[h].items[4].color=RGBToHex(inp4.css("color"));

    p905_ary[h].items[1].bgclr=RGBToHex(lid.find(".model_905_cell1").css("background-color"));
    p905_ary[h].items[2].bgclr=RGBToHex(lid.find(".model_905_cell2").css("background-color"));
    p905_ary[h].items[3].bgclr=RGBToHex(lid.find(".model_905_cell3").css("background-color"));
    p905_ary[h].items[4].bgclr=RGBToHex(lid.find(".model_905_cell4").css("background-color"));

    p905_ary[h].items[0].model=$("#t"+id_number).find(".p905_entry").eq(0).val()-0;
    p905_ary[h].items[1].model=$("#t"+id_number).find(".p905_entry").eq(1).val()-0;
    p905_ary[h].items[2].model=$("#t"+id_number).find(".p905_entry").eq(2).val()-0;
    p905_ary[h].items[3].model=$("#t"+id_number).find(".p905_entry").eq(3).val()-0;
    p905_ary[h].items[4].model=$("#t"+id_number).find(".p905_entry").eq(4).val()-0;

    //console.log(p905_ary[h]);
    item[h]=new Object();
    item[h]=p905_ary[h];


}
//ģ��906�������ർ�������Ķ�ȡ�������ɶ���ķ���
function p906_json(lid,h){
    var inp0=lid.find(".model_906_title").eq(0).children().eq(0);
    var inp1=lid.find(".model_906_title").eq(1).children().eq(0);
    var inp2=lid.find(".model_906_title").eq(2).children().eq(0);
    var p906_ary=new Array();
    p906_ary[h]=new Object();
    p906_ary[h].id=Number(page_choosen+"0"+h)+1;
    p906_ary[h].model=6;

    var id_number=lid.attr("id").substring(1);

    p906_ary[h].items=new Array();
    p906_ary[h].items[0]=new Object();
    p906_ary[h].items[1]=new Object();
    p906_ary[h].items[2]=new Object();

    p906_ary[h].items[0].title=inp0.val();
    p906_ary[h].items[1].title=inp1.val();
    p906_ary[h].items[2].title=inp2.val();

    p906_ary[h].items[0].color=RGBToHex(inp0.css("color"));
    p906_ary[h].items[1].color=RGBToHex(inp1.css("color"));
    p906_ary[h].items[2].color=RGBToHex(inp2.css("color"));
    p906_ary[h].items[0].icon=lid.find(".preview").eq(0).attr("src");
    p906_ary[h].items[1].icon=lid.find(".preview").eq(1).attr("src");
    p906_ary[h].items[2].icon=lid.find(".preview").eq(2).attr("src");

    p906_ary[h].items[0].model=$("#t"+id_number).find(".p906_entry").eq(0).val()-0;
    p906_ary[h].items[1].model=$("#t"+id_number).find(".p906_entry").eq(1).val()-0;
    p906_ary[h].items[2].model=$("#t"+id_number).find(".p906_entry").eq(2).val()-0;

    //console.log(p906_ary[h]);
    item[h]=new Object();
    item[h]=p906_ary[h];


}

function p907_json(lid,h){
    var p907_ary=new Array();
    p907_ary[h]=new Object();
    p907_ary[h].id=Number(page_choosen+"0"+h)+1;
    p907_ary[h].model=7;
    p907_ary[h].items=new Array();
    var id_number=lid.attr("id").substring(1);
    for(var u=0; u<lid.find(".preview").length-1;u++){
        p907_ary[h].items[u]=new Object();
        p907_ary[h].items[u].img=lid.find(".preview").eq(u).attr("src");
        p907_ary[h].items[u].model=$("#t"+id_number).find("select").eq(u).val()-0;
    }

    console.log(p907_ary[h]);
    item[h]=new Object();
    item[h]=p907_ary[h];
}

function p911_json(lid,h){
    var inp0_title=lid.find(".model_911_title").eq(0).children().eq(0);
    var inp1_title=lid.find(".model_911_title").eq(1).children().eq(0);
    var inp0_dsc=lid.find(".model_911_desc").eq(0).children().eq(0);
    var inp1_dsc=lid.find(".model_911_desc").eq(1).children().eq(0);

    var p911_ary=new Array();
    p911_ary[h]=new Object();
    p911_ary[h].id=Number(page_choosen+"0"+h)+1;
    p911_ary[h].model=11;

    var id_number=lid.attr("id").substring(1);

    p911_ary[h].items=new Array();
    p911_ary[h].items[0]=new Object();
    p911_ary[h].items[1]=new Object();


    p911_ary[h].items[0].title=inp0_title.val();
    p911_ary[h].items[1].title=inp1_title.val();

    p911_ary[h].items[0].desc=inp0_dsc.val();
    p911_ary[h].items[1].desc=inp1_dsc.val();

    p911_ary[h].items[0].color=RGBToHex(inp0_title.css("color"));
    p911_ary[h].items[1].color=RGBToHex(inp1_title.css("color"));

    p911_ary[h].items[0].desclr=RGBToHex(inp0_dsc.css("color"));
    p911_ary[h].items[1].desclr=RGBToHex(inp1_dsc.css("color"));

    p911_ary[h].items[0].icon=lid.find(".preview").eq(0).attr("src")
    p911_ary[h].items[1].icon=lid.find(".preview").eq(1).attr("src")

    p911_ary[h].items[0].model=$("#t"+id_number).find(".p911_entry").eq(0).val()-0;
    p911_ary[h].items[1].model=$("#t"+id_number).find(".p911_entry").eq(1).val()-0;

    //console.log(p911_ary[h]);
    item[h]=new Object();
    item[h]=p911_ary[h];


}

function p912_json(lid,h){

    var id_number=lid.attr("id").substring(1);
    if(lid.prev()){

        if(lid.prev().children().eq(0).attr("class")!="model_912"){
            var p912_ary=new Array();
            p912_ary[h]=new Object();
            p912_ary[h].id=Number(page_choosen+"0"+h)+1;
            p912_ary[h].model=12;
            p912_ary[h].items=new Array();
            var inp0_title=lid.find(".model_912_title").children().eq(0);

            var inp0_dsc=lid.find(".model_912_desc").children().eq(0);

            var inp0_price=lid.find(".model_912_price").children().eq(0);

            var inp0_pnum=lid.find(".model_912_pnum").children().eq(0);


            
            p912_ary[h].items[p912_flag]=new Object();

            p912_ary[h].items[p912_flag].icon=lid.find(".preview").eq(0).attr("src")
            p912_ary[h].items[p912_flag].picon=lid.find(".preview").eq(1).attr("src")


            p912_ary[h].items[p912_flag].title=inp0_title.val();

            p912_ary[h].items[p912_flag].desc=inp0_dsc.val();

            p912_ary[h].items[p912_flag].price=inp0_price.val()*100;

            p912_ary[h].items[p912_flag].pnum=inp0_pnum.val();


            p912_ary[h].items[p912_flag].color=RGBToHex(inp0_title.css("color"));

            p912_ary[h].items[p912_flag].desclr=RGBToHex(inp0_dsc.css("color"));

            p912_ary[h].items[p912_flag].model=$("#t"+id_number).find(".p912_entry").val()-0;

            item[h]=new Object();
            item[h]=p912_ary[h];
            
            if(lid.next().children().eq(0).attr("class")=="model_912"){
                p912_flag++;
                var inp1_title=lid.next().find(".model_912_title").children().eq(0);

                var inp1_dsc=lid.next().find(".model_912_desc").children().eq(0);

                var inp1_price=lid.next().find(".model_912_price").children().eq(0);

                var inp1_pnum=lid.next().find(".model_912_pnum").children().eq(0);

                item[h].items[p912_flag]=new Object();

                item[h].items[p912_flag].icon=lid.find(".preview").eq(0).attr("src");
                item[h].items[p912_flag].picon=lid.find(".preview").eq(1).attr("src");


                item[h].items[p912_flag].title=inp1_title.val();

                item[h].items[p912_flag].desc=inp1_dsc.val();

                item[h].items[p912_flag].price=inp1_price.val()*100;

                item[h].items[p912_flag].pnum=inp1_pnum.val();


                item[h].items[p912_flag].color=RGBToHex(inp1_title.css("color"));

                item[h].items[p912_flag].desclr=RGBToHex(inp1_dsc.css("color"));

                item[h].items[p912_flag].model=$("#t"+id_number).find(".p912_entry").val()-0;
                
            }
        }
        else if(lid.prev().children().eq(0).attr("class")=="model_912"){

            if(lid.next().children().eq(0).attr("class")=="model_912"){
                p912_flag++;
                var inp1_title=lid.next().find(".model_912_title").children().eq(0);

                var inp1_dsc=lid.next().find(".model_912_desc").children().eq(0);

                var inp1_price=lid.next().find(".model_912_price").children().eq(0);

                var inp1_pnum=lid.next().find(".model_912_pnum").children().eq(0);

                item[h+1-p912_flag].items[p912_flag]=new Object();

                item[h+1-p912_flag].items[p912_flag].icon=lid.find(".preview").eq(0).attr("src");
                item[h+1-p912_flag].items[p912_flag].picon=lid.find(".preview").eq(1).attr("src");


                item[h+1-p912_flag].items[p912_flag].title=inp1_title.val();

                item[h+1-p912_flag].items[p912_flag].desc=inp1_dsc.val();

                item[h+1-p912_flag].items[p912_flag].price=inp1_price.val()*100;

                item[h+1-p912_flag].items[p912_flag].pnum=inp1_pnum.val();


                item[h+1-p912_flag].items[p912_flag].color=RGBToHex(inp1_title.css("color"));

                item[h+1-p912_flag].items[p912_flag].desclr=RGBToHex(inp1_dsc.css("color"));

                item[h+1-p912_flag].items[p912_flag].model=$("#t"+id_number).find(".p912_entry").val()-0;

            }

        }
        
    }
    

        


        
    


}

function p913_json(lid,h){
    var id_number=lid.attr("id").substring(1);

    if(lid.prev()){

        if(lid.prev().children().eq(0).attr("class")!="model_913"){
            var p913_ary=new Array();
            p913_ary[h]=new Object();
            p913_ary[h].id=Number(page_choosen+"0"+h)+1;
            p913_ary[h].model=13;
            p913_ary[h].items=new Array();
            var inp0_title=lid.find(".model_913_title").children().eq(0);

            var inp0_dsc=lid.find(".model_913_desc").children().eq(0);



            var inp0_pnum=lid.find(".model_913_pnum").children().eq(0);



            p913_ary[h].items[p913_flag]=new Object();

            p913_ary[h].items[p913_flag].icon=lid.find(".preview").eq(0).attr("src");
            p913_ary[h].items[p913_flag].picon=lid.find(".preview").eq(1).attr("src");

            p913_ary[h].items[p913_flag].title=inp0_title.val();

            p913_ary[h].items[p913_flag].desc=inp0_dsc.val();



            p913_ary[h].items[p913_flag].pnum=inp0_pnum.val();


            p913_ary[h].items[p913_flag].color=RGBToHex(inp0_title.css("color"));

            p913_ary[h].items[p913_flag].desclr=RGBToHex(inp0_dsc.css("color"));

            p913_ary[h].items[p913_flag].model=$("#t"+id_number).find(".p913_entry").val()-0;

            item[h]=new Object();
            item[h]=p913_ary[h];

            if(lid.next().children().eq(0).attr("class")=="model_913"){
                p913_flag++;
                var inp1_title=lid.next().find(".model_913_title").children().eq(0);

                var inp1_dsc=lid.next().find(".model_913_desc").children().eq(0);



                var inp1_pnum=lid.next().find(".model_913_pnum").children().eq(0);

                item[h].items[p913_flag]=new Object();

                item[h].items[p913_flag].icon=lid.find(".preview").eq(0).attr("src");
                item[h].items[p913_flag].picon=lid.find(".preview").eq(1).attr("src");


                item[h].items[p913_flag].title=inp1_title.val();

                item[h].items[p913_flag].desc=inp1_dsc.val();



                item[h].items[p913_flag].pnum=inp1_pnum.val();


                item[h].items[p913_flag].color=RGBToHex(inp1_title.css("color"));

                item[h].items[p913_flag].desclr=RGBToHex(inp1_dsc.css("color"));

                item[h].items[p913_flag].model=$("#t"+id_number).find(".p913_entry").val()-0;

            }
        }
        else if(lid.prev().children().eq(0).attr("class")=="model_913"){

            if(lid.next().children().eq(0).attr("class")=="model_913"){
                p913_flag++;
                var inp1_title=lid.next().find(".model_913_title").children().eq(0);

                var inp1_dsc=lid.next().find(".model_913_desc").children().eq(0);



                var inp1_pnum=lid.next().find(".model_913_pnum").children().eq(0);

               item[h+1-p913_flag].items[p913_flag]=new Object();

               item[h+1-p913_flag].items[p913_flag].icon=lid.find(".preview").eq(0).attr("src");
               item[h+1-p913_flag].items[p913_flag].picon=lid.find(".preview").eq(1).attr("src");


               item[h+1-p913_flag].items[p913_flag].title=inp1_title.val();

               item[h+1-p913_flag].items[p913_flag].desc=inp1_dsc.val();



               item[h+1-p913_flag].items[p913_flag].pnum=inp1_pnum.val();


               item[h+1-p913_flag].items[p913_flag].color=RGBToHex(inp1_title.css("color"));

               item[h+1-p913_flag].items[p913_flag].desclr=RGBToHex(inp1_dsc.css("color"));

                item[h+1-p913_flag].items[p913_flag].model=$("#t"+id_number).find(".p913_entry").val()-0;

            }

        }

    }
}
//function clone1(obj){
//    function Clone(){}
//    Clone.prototype = obj;
//    var o = new Clone();
//    for(var a in o){
//        if(typeof o[a] == "object") {
//            o[a] = clone1(o[a]);
//        }
//    }
//    return o;
//}

//rgbת16����
function RGBToHex(rgb){
    var regexp = /^rgb\((\d{0,3})\,\s(\d{0,3})\,\s(\d{0,3})\)/g

    var re = rgb.replace(regexp, "$1 $2 $3").split(" ");//����������ʽȥ������Ĳ���

    var hexColor = "#"; var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (var i = 0; i < 3; i++) {
        var r = null; var c = re[i];
        var hexAr = [];
        while (c > 16) {
            r = c % 16;
            c = (c / 16) >> 0;
            hexAr.push(hex[r]);
        } hexAr.push(hex[c]);
        hexColor += hexAr.reverse().join('');
    }
    //alert(hexColor)
    return hexColor;
}

