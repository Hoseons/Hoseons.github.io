$(document).ready(function(){

  // 상단네비
    let sub_nav = $(' nav .main_nav span, .main_nav ul li> ul');
    $(sub_nav).hide();


    // 네비 내려오는거
    $(window).resize(function(){ 
      if (window.innerWidth < 480) {  // 다바이스 크기가 480이상일때 
        $('.main_nav > ul').mouseenter(function(){
          $(this).children('li').children('.sub').stop().slideDown(500)
        })
        $('.main_nav > ul').mouseleave(function(){
          $(this).children('li').children('.sub').stop().slideUp(500)
        })
       
      } else if(window.innerWidth < 768){
       
        $('.main_nav > ul').mouseover(function(){
          $(this).children('li').children('.sub').stop().slideDown(500)
        })
        $('.main_nav > ul').mouseleave(function(){
          $(this).children('li').children('.sub').stop().slideUp(500)
        })
        
      
      } else  if(window.innerWidth > 767){
        $('.main_nav > ul').mouseenter(function(){
          $(sub_nav).stop().slideDown(500)
        })
        $('.main_nav > ul').mouseleave(function(){
          $(sub_nav).stop().slideUp(500)
        })
       
      }
      
      }).resize(); 
      
    // 햄버거 메뉴관련 수정 
      var ck1 = true, ck2 = true;  
      //펼침 메뉴의 열기/닫기 모션
     $(".ham").click(function(){
           if(ck1){
               $("nav .main_nav ").addClass("on");
               $(" .ham").addClass("on");
               $("nav .main_nav2").addClass("on");
           } else {
               $("nav .main_nav").removeClass("on");
               $(".ham").removeClass("on");
               $("nav .main_nav2").removeClass("on");
           }
           ck1 = !ck1;
     }); 

      // 햄버거 메뉴관련

  // $('header .ham').on('click',function(){
  //   $(this).toggleClass('on');
 
  //   $(window).resize(function(){ 
  //     if (window.innerWidth < 480) {  // 다바이스 크기가 480이상일때 
      
  //       if($('nav .main_nav > ul').css({'opacity':'0'})){
  //         $('.nav_bg').css({'opacity':'1'})
  //         $('nav .main_nav2').css({'opacity':'1'});
  //         $('nav .main_nav > ul').css({'opacity':'1'});
        
  //       } else if($('nav .main_nav > ul').css({'opacity':'1'})){
  
  //         $('.nav_bg').hide()
  //         $('nav .main_nav2').css({'opacity':'0'});
  //         $('nav .main_nav > ul').css({'opacity':'0'});
  //       }


       
      
  //     } else if(window.innerWidth < 768){

  //     if($('nav .main_nav > ul').css({'rigt':'-300px'})){
  //       $('.nav_bg').animate({'margin-right':'300px'},300)
  //       $('nav .main_nav2').animate({'margin-right':'410px'},600)
  //       $('nav .main_nav > ul').animate({'margin-right':'390px'},600)
      
  //     } else {

  //       $('.nav_bg').animate({'margin-right':'-300px'},300)
  //       $('nav .main_nav2').animate({'margin-right':'-300px'},600)
  //       $('nav .main_nav > ul').animate({'margin-right':'-300px'},600)
  //     }
  //     }
        
  //     }).resize(); 
      
  //     })
  



//배너
let wdb = $('.container1').width();
let intvb = setInterval(function(){
  nextAni4();
},4000);

function nextAni4(){
  $('.container1 .banner').not(':animated').animate({
    'margin-left': -wdb+'px'
  },1000,function(){
    $('.container1 .banner .video').eq(0).appendTo($('.container1 .banner'));
    $('.container1 .banner').css({'margin-left':'0px'});
  });
}

function prevAni4(){
  $('.container1 .banner .video').eq(-1).prependTo($('.container1 .banner'));
  $('.container1 .banner').css({'margin-left':-wdb+'px'});
  $('.container1 .banner').not(':animated').animate({
    'margin-left': '0px'
  },1000)
}


$('.next1').click(function(){
clearInterval(intvb);
nextAni4();
var intvb = setInterval(function(){
  nextAni4();
},4000);


});

$('.prev1').click(function(){
  clearInterval(intvb);
  prevAni4();
  var intvb = setInterval(function(){
    nextAni4();
  },4000);
  
  });


// 베스트 아이템
    let wdd=$('.container5 .text_list').width();//
    let wddd=$('.container5 .img_mag ul li').width();//
    let intv2=setInterval(function(){//자동 반복 함수
      nextAni()
    },2000);

    
    function nextAni(){
      $('.container5 .text_list ul').not(':animated').animate({
        'margin-left':-wdd+'px'
      },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
          $('.container5 .text_list ul li').eq(0).appendTo($('.container5 .text_list ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
          $('.container5 .text_list ul').css({marginLeft:'0px'});
      });

      $('.container5 .img_mag ul').not(':animated').animate({
        'margin-left':-20-wddd+'px'
      },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
          $('.container5 .img_mag ul li').eq(0).appendTo($('.container5 .img_mag ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
          $('.container5 .img_mag ul').css({marginLeft:'0px'});
      });


    }//다음버튼 동작
    function prevAni(){
      $('.container5 .text_list ul li').eq(-1).prependTo($('.container5 .text_list ul'));//4번사진을 슬라이드 앞에 배치해라
      $('.container5 .text_list ul').css({'margin-left':-wdd+"px"});
      $('.container5 .text_list ul').not(':animated').animate({
        'margin-left':'0px'
      },1000)

      //사진
      $('.container5 .img_mag ul li').eq(-1).prependTo($('.container5 .img_mag ul'));//4번사진을 슬라이드 앞에 배치해라
      $('.container5 .img_mag ul').css({'margin-left':-wddd+"px"});
      $('.container5 .img_mag ul').not(':animated').animate({
        'margin-left':'0px'
      },1000)


    }//이전버튼 동작
   
    /* 다음버튼 클릭 */
  $('.next2').click(function(){
    clearInterval(intv2)
   //자동동작 멈추고
    nextAni();//nextAni() 함수 실행
    var intv2=setInterval(function(){//자동 반복 함수
      nextAni()
    },2000);
  });
  /* 이전버튼 클릭 */
  $('.prev2').click(function(){
   clearInterval(intv2)
    prevAni();
    var intv2=setInterval(function(){//자동 반복 함수
      nextAni()
    },2000);
  });

  
  // 나를위한 오아! 발견

  $('.container4 .product ul').hide();
  $('#con1').show();  
 
  $('.text_list_inner ul li').click(function(){
     $('.text_list_inner ul li').removeClass('on');
     $(this).addClass('on');
 
     var Tab=$(this).children('a').attr('href');
     $('.container4 .product ul').hide();
     $(Tab).show();
     return false;
 })
 $('.text_list .img li').hide();
 $('#img1').show();
 $('.container6 .text_list .list li').hover(function(){
     var Tab2=$(this).children('a').attr('href');
     $('.text_list .img li').hide();
     $(Tab2).show();
     return false;
 });

 $( '#example1' ).sliderPro({
  width: 280,
  height: 280,
  arrows: true,
  buttons: false,
  waitForLayers: true,
  thumbnailWidth: 200,
  thumbnailHeight: 100,
  thumbnailPointer: true,
  autoplay: false,
  autoScaleLayers: false,
  breakpoints: {
    500: {
      thumbnailWidth: 120,
      thumbnailHeight: 50
    }
  }
});


   
    });


