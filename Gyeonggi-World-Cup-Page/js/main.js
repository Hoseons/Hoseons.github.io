/*"use strict"*/

$(document).ready(function(){

  $(window).resize(function(){ 
    if (window.innerWidth < 480) {  // 다바이스 크기가 480이상일때 
   
      $('.sub_manu').hide()


      $(' .second_nav .inner > ul > li').mouseover(function(){
        $(this).children('.sub_manu').stop().slideDown()
      });
      $('.second_nav .inner ul > li').mouseleave(function(){
        $(this).children('.sub_manu').stop().slideUp()
      });
     
    } else if(window.innerWidth < 900){
      $('.sub_manu').hide()
      $(' .second_nav .inner > ul > li').mouseover(function(){
        $(this).children('.sub_manu').stop().slideDown()
      });
      $('.second_nav .inner ul > li').mouseleave(function(){
        $(this).children('.sub_manu').stop().slideUp()
      });

 

     
    
    } else  if(window.innerWidth > 900){
      $('.sub_manu,.sub_bg').hide()

      $('.second_nav .inner ul > li').mouseover(function(){
        $('.sub_manu,.sub_bg').stop().slideDown()
      });
      $('.second_nav .inner ul > li').mouseleave(function(){
        $('.sub_manu,.sub_bg').stop().slideUp()
      });
     
    }
    
    }).resize(); 



  //배너 슬라이드


  var wd=$('.banner_wrap').width();//
  var intv2=setInterval(function(){//자동 반복 함수
    nextAni()
  },4000);
  function nextAni(){
    $('.banner_img').not(':animated').animate({
      'margin-left':-wd+'px'
    },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
        $('.banner_img img').eq(0).appendTo($('.banner_img'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
        $('.banner_img ').css({marginLeft:'0px'});
    });

    $(".peg span").eq(0).appendTo($(".peg"));
        $(".peg span").eq(0).addClass("on");
        $(".peg span").not(":first-child").removeClass("on");


  }//다음버튼 동작

  function prevAni(){
    $('.banner_img img').eq(-1).prependTo($('.banner_img'));//4번사진을 슬라이드 앞에 배치해라
    $('.banner_img').css({'margin-left':-wd+"px"});
    $('.banner_img').not(':animated').animate({
      'margin-left':'0px'
    },1000)

    $(".peg span").eq(2).prependTo($(".peg"));
          $(".peg span").eq(0).addClass("on");
          $(".peg span").not(":first-child").removeClass("on");

  }//이전버튼 동작

  /* 다음버튼 클릭 */
  $('#arrow_b_r').click(function(){
    clearInterval(intv2)
    nextAni();//nextAni() 함수 실행
    var intv2=setInterval(function(){nextAni()},2000);
  });
  /* 이전버튼 클릭 */
  $('#arrow_b_l').click(function(){
    clearInterval(intv2)
    prevAni();
    var intv2=setInterval(function(){nextAni()},2000);
  });


  $('.peg span').click(function(){
    clearInterval(intv2);
        var idx = $(this).index()-1;
        for(var i=0;i<idx;i++){
            $(".banner_img img").eq(0).appendTo($(".banner_img"));
            $(".peg span").eq(0).appendTo($(".peg"));
        }
        nextAni();
       var intv2 = setInterval(function(){ nextAni(); }, 3000);
  });



  // 통합검색
  $('.dropbox_sub').hide()


  $('.select').hover(function(){
    $('.dropbox_sub').stop().slideDown()
  },function(){
    $('.dropbox_sub').stop().slideUp()
  });

  $('.dropbox_sub li').click(function(){
    $('.select strong').text($(this).text());
  });


  // news

  $('.contents ul').hide()
  $('#news1').show()

  $('.kate ul li').click(function(){
    $('.kate ul li').removeClass('on')
    $(this).addClass('on')

    var Tab =  $(this).children('a').attr('href')

    $('.contents ul').hide()
    $(Tab).show()
    
    return false

  });

  //sns
  $('.bottom ul').hide()
  $('#sns1').show()


  $('.top ul li').click(function(){


    var Tab2 =  $(this).children('a').attr('href')

    $('.bottom ul').hide()
    $(Tab2).show()
    
    return false

  });

  //관련기관
  $('.sub_menu').hide()

  $('#associate').hover(function(){
    $('.sub_menu').stop().slideDown()
  },function(){
    $('.sub_menu').stop().slideUp()
  });

  //경기 슬라이드

  let wd1=$('.container1 .top_banner .vs .img_wrap').width();//
  let intv=setInterval(function(){//자동 반복 함수
    nextAni1()
  },4000);
  function nextAni1(){
    $('.container1 .top_banner .vs .img_wrap .img_list').not(':animated').animate({
      'margin-left':-wd1+'px'
    },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
        $('.container1 .top_banner .vs .img_wrap .img_list .img').eq(0).appendTo($('.container1 .top_banner .vs .img_wrap .img_list'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
        $('.container1 .top_banner .vs .img_wrap .img_list').css({marginLeft:'0px'});
    });


    $('.day .wrap div ').not(':animated').animate({
      'margin-left':-wd1+'px'
    },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
        $('.day .wrap div p').eq(0).appendTo($('.day .wrap div'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
        $('.day .wrap div').css({marginLeft:'0px'});
    });




  }//다음버튼 동작

  function prevAni1(){
    $('.container1 .top_banner .vs .img_wrap .img_list .img').eq(-1).prependTo($('.container1 .top_banner .vs .img_wrap .img_list'));//4번사진을 슬라이드 앞에 배치해라
    $('.container1 .top_banner .vs .img_wrap .img_list').css({'margin-left':-wd1+"px"});
    $('.container1 .top_banner .vs .img_wrap .img_list').not(':animated').animate({
      'margin-left':'0px'
    },1000)
    



    $('.day .wrap div p').eq(-1).prependTo($('.day .wrap div'));//4번사진을 슬라이드 앞에 배치해라
    $('.day .wrap div').css({'margin-left':-wd1+"px"});
    $('.day .wrap div').not(':animated').animate({
      'margin-left':'0px'
    },1000)
  }//이전버튼 동작

  /* 다음버튼 클릭 */
  $('#arrow_p_r').click(function(){
  clearInterval(intv)
  //자동동작 멈추고
  nextAni1();//nextAni() 함수 실행
  var intv=setInterval(function(){//자동 반복 함수
    nextAni1()
  },2000);
  });
  /* 이전버튼 클릭 */
  $('#arrow_p_l').click(function(){
  clearInterval(intv)
  prevAni1();
  var intv=setInterval(function(){//자동 반복 함수
    nextAni1()
  },2000);
  });



});