$(function(){
    var width = document.body.clientWidth;
    var height = window.innerHeight;
    $(".banner,.team").height(height);
    $(".title_pic_01 img").hover(function(){
        $(this).attr("src","images/im-zixun.png");
    },function(){
        $(this).attr("src","images/zixun.png");
    });
    $(".title_pic_02 img").hover(function(){
        $(this).attr("src","images/im-app.png");
    },function(){
        $(this).attr("src","images/app.png");
    });
    $(".title_pic_03 img").hover(function(){
        $(this).attr("src","images/im-video.png");
    },function(){
        $(this).attr("src","images/video.png");
    });
    $(".title_pic_04 img").hover(function(){
        $(this).attr("src","images/im-mooc.png");
    },function(){
        $(this).attr("src","images/mooc.png");
    });
});