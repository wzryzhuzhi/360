/**
 * Created by YZTC on 2017/3/21.
 */

var mySwiper = new Swiper ('.swiper-container', {
//            direction: 'vertical',
    loop: true,

    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    //
    // // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
    autoplay:2000,
    autoplayDisableOnInteraction : false,
})

/*inner二级菜单*/
/*第一个*/
$.getJSON("json/ban/ban1.json",function (res) {
    fun1(res.result)
})
    function fun1(arr){
        for(var msg in arr){
            var namedl=arr[msg].name
            var dls=$("<dl><dt><span></span></dt><dd><p></p></dd></dl>");
            dls.find("dt").find("span").text(namedl);
            $("#content").append(dls);
            var lists=arr[msg].list
            for(var u in lists){
                var a=$("<a href='#'></a>");
                a.text(lists[u].name);
                dls.find("dd").find("p").append(a);
            }
        }
        $("#in-content.in1").on("mousemove",function () {
            $("#in-content.in1").css("display","block")
        });
        $("#in-content.in1").on("mouseout",function () {
            $("#in-content.in1").css("display","none")
        });
        $("#header #inner .ul1 li").eq(0).hover(function () {
            $("#in-content.in1").css("display","block")
        },function () {
            $("#in-content.in1").css("display","none")
        })
}


/*第二个*/
$.getJSON("json/ban/ban2.json",function (res) {
    fun2(res.result)
});
function fun2(arr) {
    for(var i in arr){
        var dls=$("<dl><dt><span></span></dt><dd></dd></dl>");
        $(".con_tap1").append(dls);
        for(var j in arr[i]){
            var $a=$("<a href='#'></a>")
            $a.text(arr[i][j].name);
            dls.find("dd").append($a)
        }
    }
    $(".con_tap1 dl").eq(0).find("dt").find("span").text("热门问题：");
    $(".con_tap1 dl").eq(1).find("dt").find("span").text("其他问题：");
}
$("#header #inner .ul1 li").eq(1).mouseover(function () {
    $("#con2").css("display","block")
});
$("#con2").mousemove(function () {
    $("#con2").css("display","block")
});
$("#con2").mouseout(function () {
    $("#con2").css("display","none")
});
$("#header #inner .ul1 li").eq(1).mouseout(function () {
    $("#con2").css("display","none")
});

/*第三个*/
$.getJSON("json/ban/ban3.json",function (res) {
    fun3(res.result)
});
function fun3(arr) {
    var $div=$("<div></div>");
    $(".con_tap2").append($div);
    for(var phone in arr){
        var $a=$("<a href='#'></a>");
        $a.text(arr[phone].name);
        $div.append($a);
    }
}
$("#header #inner .ul1 li").eq(2).mouseover(function () {
    $("#con3").css("display","block")
});
$("#con3").mousemove(function () {
    $("#con3").css("display","block")
});
$("#con3").mouseout(function () {
    $("#con3").css("display","none")
});
$("#header #inner .ul1 li").eq(2).mouseout(function () {
    $("#con3").css("display","none")
});

/*第四个*/
$.getJSON("json/ban/ban4.json",function (res) {
    fun4(res.result)
});
function fun4(arr) {
    var $div=$("<div></div>");
    $(".con_tap3").append($div);
        for(var index in arr){
            var $a=$("<a href='#'></a>");
            $a.text(arr[index]);
            $div.append($a);
        }
    }
$("#header #inner .ul1 li").eq(3).mouseover(function () {
    $("#con4").css("display","block")
});
$("#con4").mousemove(function () {
    $("#con4").css("display","block")
});
$("#con4").mouseout(function () {
    $("#con4").css("display","none")
});
$("#header #inner .ul1 li").eq(3).mouseout(function () {
    $("#con4").css("display","none")
});


/*精选和热点*/
$.getJSON("json/json2/huishou.json",function (res) {
     var arr=res.result;
    for(var i in arr){
        var lis=$('<li><img src="" alt=""><p><a href="#"></a></p></li>');
        lis.find("img").attr({
            "src":arr[i].img_url,
            "width":82,
            "height":160,
        });

        lis.find("a").text(arr[i].model_alis)
        $("#box #pics .pic_con2 ul").append(lis);
    }
});
$.getJSON("json/json2/ershou.json",function (res) {
    var arr=res.result;
    for(var i in arr){
        var lis=$('<li><img src="" alt=""><p class="p1"><a href="#"></a></p><p class="p2"><a href="#"></a></p></li>');
        lis.find("img").attr({
            "src":arr[i].thum_img.old,
            width:125,
            height:156
        });

        lis.find(".p1 a").text(arr[i].brand_name+arr[i].model_name);
        lis.find(".p2 a").text("￥"+arr[i].com_price);
        $("#box #pics .pic_con3 ul").append(lis);
    }
});



