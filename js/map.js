/**
 * Created by YZTC on 2017/3/22.
 */


/*分页数据*/

$.getJSON("json/json1/y1.json",function (res) {
    funFenye(res.shop_data);
})

/*maps地图分页*/
var map = new AMap.Map('container',{
    zoom: 10,
    center: [114.3590498,30.52548533]//new AMap.LngLat(116.39,39.9)
});

function funFenye(arr) {
    var pageCount=arr.page_count

    for(var i=0;i<arr.length;i++){
        var $w3=$("<p><img src='imgs/jling/jt4.png' alt=''>先行赔付</p><p><img src='imgs/jling/￥ (2).png' alt=''>同城帮认证</p><p>人气：9999条浏览</p>")
        var $lis=$('<li>' +
            '<div class="w1"><a href="#"><img src="" alt=""></a></div>' +
            '<div class="w2">' +
            '<h3><a href="#"></a><div class="w3"></div></h3>' +
            '<p class="p1"></p><p class="p2"></p></div>' +
            '<div class="btn"><a href="#"></a></div></li>');
        $lis.find(".w3").append($w3);
        $lis.find(".w1").find("a img").attr({"src":arr[i].shop_ico});
        $lis.find(".w2 h3 a").text(arr[i].shop_name);
        $lis.find(".w2 .p1").text("主营:"+arr[i].main);
        $lis.find(".w2 .p2").text("地址:"+arr[i].addr_detail);
        $lis.find(".btn a").text("进入店铺");
        $lis.hover(function () {
            $(this).css("background","#fafafa");
            $(this).find(".btn").css("display","block");
        },function () {
            $(this).css("background","#fff");
            $(this).find(".btn").css("display","none");
        })
        $("#list").append($lis);
        (function (k) {
            var marker = new AMap.Marker({
                position: [arr[k].map_longitude,arr[k].map_latitude],
                map:map
            })

            marker.on("click",openInfo);
            //实例化信息窗体
            function openInfo() {
                var infoWindow = new AMap.InfoWindow({
                    isCustom: true,  //使用自定义窗体
                    content: "<div id='con_id'>" +
                    "<h2>"+arr[k].shop_name+"</h2>" +
                    "<p>"+"主营："+arr[k].main+"</p>" +
                    "<p>"+"地址："+arr[k].addr_detail+"</p>" +
                    "<p><img src='imgs/jling/jt3.png' alt=''><a href='#'>进入店铺>></a></p>" +
                    "</div>",
                    offset: new AMap.Pixel(16, -50)//-113, -140
                });
                infoWindow.open(map, [arr[k].map_longitude, arr[k].map_latitude]);
            }
        })(i);

    }

    $("#page").Page({
        totalPages: 3,//total Pages
        liNums: 5,//the li numbers(advice use odd)
        activeClass: 'activP', //active class style
        firstPage: '首页',//first button name
        lastPage: '末页',//last button name
        prv: '上一页',//prev button name
        next: '下一页',//next button name
        hasFirstPage: true,//whether has first button
        hasLastPage: true,//whether has last button
        hasPrv: true,//whether has prev button
        hasNext: true,//whether has next button
        callBack: function (page) {
            $("#list").empty();
            $.getJSON("json/json1/y"+page+".json",function (res){
                var arr=res.shop_data;
                for(var i=0;i<arr.length;i++){
                    var $w3=$("<p><img src='' alt=''>先行赔付</p><p><img src='' alt=''>同城帮认证</p><p>人气：9999条浏览</p>")
                    var $lis=$('<li>' +
                        '<div class="w1"><a href="#"><img src="" alt=""></a></div>' +
                        '<div class="w2">' +
                        '<h3><a href="#"></a><div class="w3"></div></h3>' +
                        '<p class="p1"></p><p class="p2"></p></div>' +
                        '<div class="btn"><a href="#"></a></div></li>');
                    // $lis.find(".w3").append($w3);
                    $lis.find(".w1").find("a img").attr({"src":arr[i].shop_ico});
                    $lis.find(".w2 h3 a").text(arr[i].shop_name);
                    $lis.find(".w2 .p1").text("主营:"+arr[i].main);
                    $lis.find(".w2 .p2").text("地址:"+arr[i].addr_detail);
                    $lis.find(".btn a").text("进入店铺");
                    $lis.hover(function () {
                        $(this).css("background","#fafafa");
                        $(this).find(".btn").css("display","block");
                    },function () {
                        $(this).css("background","#fff");
                        $(this).find(".btn").css("display","none");
                    })
                    $("#list").append($lis);

                    (function (k) {
                        var marker = new AMap.Marker({
                            position: [arr[k].map_longitude,arr[k].map_latitude],
                            map:map

                        })
                        //实例化信息窗体
                        marker.on("click",openInfo);
                        //实例化信息窗体
                        function openInfo() {
                            var infoWindow = new AMap.InfoWindow({
                                content: "<div id='con_id'>" +
                                "<h2>"+arr[k].shop_name+"</h2>" +
                                "<p>"+"主营："+arr[k].main+"</p>" +
                                "<p>"+"地址："+arr[k].addr_detail+"</p>" +
                                "<p><img src='imgs/jling/jt3.png' alt=''><a href='#'>进入店铺>></a></p>" +
                                "</div>",
                                offset: new AMap.Pixel(16, -50)//-113, -140
                            });
                            infoWindow.open(map, [arr[k].map_longitude, arr[k].map_latitude]);
                        }

                    })(i)
                }
            })
        }
    })
}


