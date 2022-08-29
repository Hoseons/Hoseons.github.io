$(document).ready(function(){
    
  let sub= $('header .second .inner .sub_bg');
       
  $(window).resize(function(){ 
    if (window.innerWidth < 480) {  // 다바이스 크기가 480이상일때 
      $('.cate').mouseenter(function(){
        $(this,'> .sub_bg').stop().slideDown(500)
      })
        $('header .second .inner >ul').hide()
          $('.ham').click(function(){
            $('.ham').addClass('on')
          });
            
    } else if(window.innerWidth < 768){

// 스크롤          
      const navClass = document.getElementById("#fixed")
        const navChange=()=>{
          let pageY = window.pageYOffset;
            if(pageY > 50){
              navClass.style.top = "0px";
            }else{
              navClass.style.top = "100px";
            }
        }

      navClass.addEventListener('scroll',navChange)
        const min = document.querySelectorAll(".min_banner")
        const firstnav = document.querySelectorAll(".first")
        const navTop=()=>{
          let pageY = window.pageYOffset;
          if(pageY > 100){
            min.style.display = 'none';
            firstnav.style.display = 'none';
          }else{
            min.style.display = 'block';
            firstnav.style.display = 'block';
          }
        }
        
      min.addEventListener('scroll',navTop)

      $('.cate').mouseenter(function(){
        $(this,'> .sub_bg').stop().slideDown(500)
      })

    } else if(window.innerWidth > 767){
      $('header .second .inner > ul').show();
      let sub= $('header .second .inner .sub_bg');
      $(sub).hide();
      $('header .second .cate').mouseenter(function(){
        $(sub).stop().slideDown(500);
      })
      $('header .second .cate').mouseleave(function(){
        $(sub).stop().slideUp(500);
      })
    }
  }).resize(); 
  

  // 햄버거 메뉴
  $('header .ham').on('click',function(){
    $(this).toggleClass('on')
    $(window).resize(function(){ 
      if (window.innerWidth < 480) {  // 다바이스 크기가 480이상일때 
        if($('header .second .inner >ul').show()){
          $('header .ham').click(function(){
            $('header .second .inner >ul').fadeOut(500);
          })
         
        } else if($('header .second .inner >ul').hide()){
          $('header .ham').click(function(){
            $('header .second .inner >ul').fadeIn(500);
          })
        }

         //슬라이더
        $( '#example1' ).sliderPro({
          width: 102,
          height: 235,
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

      } else if(window.innerWidth < 768){

          if($('header .second .inner >ul:after').css({'left':'-300px'})){
          $('header .second .inner >ul:after').animate({'margin-left':'300px'},300)
          $('header .second .inner >ul').animate({'margin-left':'390px'},600)
        
        }
      }
        
    }).resize(); 
      
  })
  

  //날씨추천
  $('.container4 > ul').hide();
  $('.container4 > #wea1').show();
    
  $('.select ul li').click(function(){
    var Tab=$(this).children('a').attr('href');
    $('.container4 > ul').hide();
    $(Tab).show();
    return false;
  });

  // 날씨추천 키워드 선택
  $('.select ul > div').hide()
    $('.select ul').hover(function(){
        $('.select ul > div').stop().slideDown();
        $('.container4 .select ul strong::before').style.background = 'url(../images/sub_store/fi-rs-angle-small-up.svg)';
    },function(){
        $('.select ul > div').stop().slideUp();
    });

    $('.select ul li').click(function(){
        $('.select strong').text($(this).children('a').text());
    });

    // 리뷰
    $('.container5 .select li').click(function(){
        $('.container5 .select li').removeClass('on')
        $(this).addClass('on')
        return false
    });
    $('.review_list ul').hide();
    $('.review_list #review1').show();
    $('.container5 .select li').click(function(){
        var tabb = $(this).children('a').attr('href');
        $('.review_list ul').hide();
        $(tabb).show();
        return false
    });


    //이건 어떠세요
    $('.container7 .select li').click(function(){
        $('.container7 .select li').removeClass('on')
        $(this).addClass('on')
        return false
    });
    $('.container7 .how_list ul').hide();
    $('.container7 #how1').show();
    $('.container7 .select li').click(function(){
        var tabbb = $(this).children('a').attr('href');
        $('.container7 .how_list ul').hide();
        $(tabbb).show();
        return false
    });

    //엠디픽
    $('.container8 .img ul').hide();
    $('.container8 #ref1').show();
      if (window.innerWidth < 768){  // 다바이스 크기가 480이상일때 
        $('.container8 #ref1').hide();
      }else if(window.innerWidth > 767){
        $('.container8 .select li').hover(function(){
          var tabbbb = $(this).children('a').attr('href');
          $('.container8 .img ul').hide();
          $(tabbbb).show();
          return false
        });
      };

//스크롤
    $('.side_navi').css('top','250px');
    $(window).scroll(function(){
      $('.side_navi').stop();
      $('.side_navi').animate({
        'top':$(document).scrollTop()+150+'px'
      },800);
    });

    

    $(window).resize(function(){ 
     
              
      if(window.innerWidth <480){
        window.addEventListener('scroll',function(){
          scrollAmount= this.pageYOffset;
          if(scrollAmount>50){
            $('header .min_banner').css({'display':'none'});
            $('header .first').css({'display':'none'});
            $('header .logo_part .inner').css({'top':'0px'});
            $('header .logo_part .inner .ham').css({'top':'28px'});
      
          }else{
            $('header .min_banner').css({'display':'none'});
            $('header .first').css({'display':'block'});
            $('header .logo_part .inner').css({'top':'40px'});
            $('header .logo_part .inner .ham').css({'top':'70px'});
          }
        });
       
      } else if(window.innerWidth <768){
        window.addEventListener('scroll',function(){
          scrollAmount= this.pageYOffset;
          if(scrollAmount>50){
            $('header .min_banner').css({'display':'none'});
            $('header .first').css({'display':'none'});
            $('header .logo_part .inner').css({'top':'0px'});
            $('header .logo_part .inner .ham').css({'top':'70px'});
      
          }else{
            $('header .min_banner').css({'display':'none'});
            $('header .first').css({'display':'block'});
            $('header .logo_part .inner').css({'top':'80px'});
            $('header .logo_part .inner .ham').css({'top':'145px'});
          }
        });
       
      } else if (window.innerWidth > 767) {  // 다바이스 크기가 480이상일때 
        window.addEventListener('scroll',function(){
          scrollAmount= this.pageYOffset;
          if(scrollAmount>50){
            $('header .min_banner').css({'display':'none'});
            $('header .first').css({'display':'none'});
      
          }else{
            $('header .min_banner').css({'display':'block'});
            $('header .first').css({'display':'block'});
          }
        });
      }
    }).resize(); 
    






    //카테고리 슬라이더
    let wd1=$('.container2 ul li').width();//
    let intv1=setInterval(function(){//자동 반복 함수
      nextAni1()
    },2000);
    function nextAni1(){
      $('.container2 ul').not(':animated').animate({
        'margin-left':-wd1+'px'
      },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
          $('.container2 ul li').eq(0).appendTo($('.container2 ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
          $('.container2 ul').css({marginLeft:'0px'});
      });

    }//다음버튼 동작
    
    function prevAni1(){
      $('.container2 ul li').eq(-1).prependTo($('.container2 ul'));//4번사진을 슬라이드 앞에 배치해라
      $('.container2 ul').css({'margin-left':-wd1+"px"});
      $('.container2 ul').not(':animated').animate({
        'margin-left':'0px'
      },1000)
    }//이전버튼 동작
   
    /* 다음버튼 클릭 */
  $('.next1').click(function(){
    clearInterval(intv1)
   //자동동작 멈추고
    nextAni1();//nextAni() 함수 실행
    var intv1=setInterval(function(){//자동 반복 함수
      nextAni1()
    },2000);
  });
  /* 이전버튼 클릭 */
  $('.prev1').click(function(){
    clearInterval(intv1)
    prevAni1();
    var intv1=setInterval(function(){//자동 반복 함수
      nextAni1()
    },2000);
  });


  //베스트아이템
  let wd2=$('.container3 ul li').width();//
  let intv2=setInterval(function(){//자동 반복 함수
    nextAni2()
  },2000);
  function nextAni2(){
    $('.container3 ul').not(':animated').animate({
      'margin-left':-20-wd2+'px'
    },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
        $('.container3 ul li').eq(0).appendTo($('.container3 ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
        $('.container3 ul').css({marginLeft:'0px'});
    });
  }//다음버튼 동작
  
  function prevAni2(){
    $('.container3 ul li').eq(-1).prependTo($('.container3 ul'));//4번사진을 슬라이드 앞에 배치해라
    $('.container3 ul').css({'margin-left':-wd2+"px"});
    $('.container3 ul').not(':animated').animate({
      'margin-left':'0px'
    },1000)
  }//이전버튼 동작
 
  /* 다음버튼 클릭 */
  $('.next2').click(function(){
    clearInterval(intv2)
  //자동동작 멈추고
    nextAni2();//nextAni() 함수 실행
    var intv2=setInterval(function(){//자동 반복 함수
      nextAni2()
    },2000);
  });
/* 이전버튼 클릭 */
  $('.prev2').click(function(){
    clearInterval(intv2)
    prevAni2();
    var intv2=setInterval(function(){//자동 반복 함수
      nextAni2()
    },2000);
  });

//날씨추천 슬라이드

  let wd3=$('.container4 ul li').width();//

  function nextAni3(){
    $('.container4 ul').not(':animated').animate({
      'margin-left':-wd2+'px'
    },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
        $('.container4 ul li').eq(0).appendTo($('.container4 ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
        $('.container4 ul').css({marginLeft:'0px'});
    });

  }//다음버튼 동작

  function prevAni3(){
    $('.container4 ul li').eq(-1).prependTo($('.container4 ul'));//4번사진을 슬라이드 앞에 배치해라
    $('.container4 ul').css({'margin-left':-wd2+"px"});
    $('.container4 ul').not(':animated').animate({
      'margin-left':'0px'
    },1000)
  }//이전버튼 동작

  /* 다음버튼 클릭 */
  $('.next3').click(function(){
  //자동동작 멈추고
  nextAni3();//nextAni() 함수 실행

  });
  /* 이전버튼 클릭 */
  $('.prev3').click(function(){

  prevAni3();

  });


});