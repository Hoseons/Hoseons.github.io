$(document).ready(function(){
    //nav
    let sub_nav = $(' nav .main_nav span, .main_nav ul li> ul');
    $(sub_nav).hide();

    $('nav .main_nav ul').hover(function(){
        $(sub_nav).stop().slideDown(500);
    },
    function(){
        $(sub_nav).stop().slideUp();});


    // 베스트 아이템

      var intv1 = setInterval(function(){
        nextAni()
      },4000);


    let wdd=$('.container2 .text_list ul li').width();//
    let wddd=$('.container2 .img_mag ul li').width();//
    function nextAni(){
      $('.container2 .text_list ul').not(':animated').animate({
        'margin-left':-wdd+'px'
      },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
          $('.container2 .text_list ul li').eq(0).appendTo($('.container2 .text_list ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
          $('.container2 .text_list ul').css({marginLeft:'0px'});
      });

      $('.container2 .img_mag ul').not(':animated').animate({
        'margin-left':-20-wddd+'px'
      },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
          $('.container2 .img_mag ul li').eq(0).appendTo($('.container2 .img_mag ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
          $('.container2 .img_mag ul').css({marginLeft:'0px'});
      });


    }//다음버튼 동작
    function prevAni(){
      $('.container2 .text_list ul li').eq(-1).prependTo($('.container2 .text_list ul'));//4번사진을 슬라이드 앞에 배치해라
      $('.container2 .text_list ul').css({'margin-left':-wdd+"px"});
      $('.container2 .text_list ul').not(':animated').animate({
        'margin-left':'0px'
      },1000)

      //사진
      $('.container2 .img_mag ul li').eq(-1).prependTo($('.container2 .img_mag ul'));//4번사진을 슬라이드 앞에 배치해라
      $('.container2 .img_mag ul').css({'margin-left':-wddd+"px"});
      $('.container2 .img_mag ul').not(':animated').animate({
        'margin-left':'0px'
      },1000)


    }//이전버튼 동작
   
      /* 다음버튼 클릭 */
    $('.next2').click(function(){
      clearInterval(intv1)
    //자동동작 멈추고
      nextAni();//nextAni() 함수 실행
      var intv1 = setInterval(function(){
        nextAni()
      },4000);
    });
    /* 이전버튼 클릭 */
    $('.prev2').click(function(){
      clearInterval(intv1)
      prevAni();
      var intv1 = setInterval(function(){
        nextAni()
      },4000);
    });
      // 오아스토리

      var intv2 = setInterval(function(){
        nextAni2()
      },4000);

    
    let wdd2=$('.container3 .text_list ul li').width();//
    let wddd2=$('.container3 .img_mag ul li').width();//
    function nextAni2(){
      $('.container3 .text_list ul').not(':animated').animate({
        'margin-left':-wdd2+'px'
      },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
          $('.container3 .text_list ul li').eq(0).appendTo($('.container3 .text_list ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
          $('.container3 .text_list ul').css({marginLeft:'0px'});
      });

      $('.container3 .img_mag ul').not(':animated').animate({
        'margin-left':-20-wddd2+'px'
      },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
          $('.container3 .img_mag ul li').eq(0).appendTo($('.container3 .img_mag ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
          $('.container3 .img_mag ul').css({marginLeft:'0px'});
      });


    }//다음버튼 동작
    function prevAni2(){
      $('.container3 .text_list ul li').eq(-1).prependTo($('.container3 .text_list ul'));//4번사진을 슬라이드 앞에 배치해라
      $('.container3 .text_list ul').css({'margin-left':-wdd2+"px"});
      $('.container3 .text_list ul').not(':animated').animate({
        'margin-left':'0px'
      },1000)

      //사진
      $('.container3 .img_mag ul li').eq(-1).prependTo($('.container3 .img_mag ul'));//4번사진을 슬라이드 앞에 배치해라
      $('.container3 .img_mag ul').css({'margin-left':-wddd2+"px"});
      $('.container3 .img_mag ul').not(':animated').animate({
        'margin-left':'0px'
      },1000)


    }//이전버튼 동작
   
      /* 다음버튼 클릭 */
    $('.next3').click(function(){
      clearInterval(intv2)
    //자동동작 멈추고
      nextAni2();//nextAni() 함수 실행
      var intv2 = setInterval(function(){
        nextAni2()
      },4000);
    });
    /* 이전버튼 클릭 */
    $('.prev3').click(function(){
      clearInterval(intv2)
      prevAni2();
      var intv2 = setInterval(function(){
        nextAni2()
      },4000);
    });
    //스폰서
    let wd=$('.container5 .img li').width();//400px
    let intv3=setInterval(function(){//자동 반복 함수
      nextAni4()
    },2000);

    function nextAni4(){
      $('.container5 .img').not(':animated').animate({
        'margin-left':-20-wd*2+'px'
      },700,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
          $('.container5 .img li').eq(0).appendTo($('.container5 .img'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
          $('.container5 .img').css({marginLeft:'0px'});

      });
    }

  //탭
  $('.tabb').hide();
  $('#home').show();
  $('.tab li').click(function(){
    var Tab2 = $(this).children('a').attr('href')

    $('.tab li').removeClass('on')
    $(this).addClass('on')
    
    $('.tabb').hide();
    $(Tab2).show();
    return false
  });

  $('.container3 .more').click(function(){
    var Tab3 = $(this).children('a').attr('href')

    $('.tab li').removeClass('on')
    $('.tab1').addClass('on')
    
    $('.tabb').hide();
    $(Tab3).show();
    return false
  });

  // 햄버거 메뉴
  $('header .ham').on('click',function(){
    $(this).toggleClass('on')

    $(window).resize(function(){ 
      if (window.innerWidth < 480) {  // 다바이스 크기가 480이상일때 
      
        if($('nav .main_nav > ul').css({'opacity':'0'})){
          $('.nav_bg').css({'opacity':'1'})
          $('nav .main_nav2').css({'opacity':'1'});
          $('nav .main_nav > ul').css({'opacity':'1'});
        
        } else if($('nav .main_nav > ul').css({'opacity':'1'})){

          $('.nav_bg').hide()
          $('nav .main_nav2').css({'opacity':'0'});
          $('nav .main_nav > ul').css({'opacity':'0'});
        }


      
      
      } else if(window.innerWidth < 768){

      if($('nav .main_nav > ul').css({'rigt':'-300px'})){
        $('.nav_bg').animate({'margin-right':'300px'},300)
        $('nav .main_nav2').animate({'margin-right':'410px'},600)
        $('nav .main_nav > ul').animate({'margin-right':'390px'},600)
      
      } else {

        $('.nav_bg').animate({'margin-right':'-300px'},300)
        $('nav .main_nav2').animate({'margin-right':'-300px'},600)
        $('nav .main_nav > ul').animate({'margin-right':'-300px'},600)
      }
      }
        
      }).resize(); 
      
      })

  // 상단 메뉴 스크롤


  window.addEventListener('scroll',function(){
    scrollAmount= this.pageYOffset;
    if(scrollAmount>20){
      $('nav > label .nav_div span').css({'background':'#000'});

    }else{
      $('nav > label .nav_div span').css({'background':'#fff'});
    }
  });



});