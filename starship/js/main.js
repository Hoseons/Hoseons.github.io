/*"use strict"*/

$(document).ready(function(){

  let wdb = $('header_banner .video_div').width();
  let intvb = setInterval(function(){
    nextAni();
  },4000);

  function nextAni(){
    $('header_banner .video_div').not(':animated').animate({
      'margin-left': -wdb+'px'
    },1000,function(){
      $('header_banner .video_div video').eq(0).appendTo($('header_banner .video_div'));
      $('header_banner .video_div').css({'margin-left':'0px'});
    });
  }

  let wd2 = $('.container1').width();
  let intv2 = setInterval(function(){
    nextAni2();
  },4000);

  function nextAni2(){
    $('.container1 .artist_div').not(':animated').animate({
      'margin-left': -wd2+'px'
    },2000,function(){
      $('.container1 .artist_div .page').eq(0).appendTo($('.container1 .artist_div'));
      $('.container1 .artist_div').css({'margin-left':'0px'});
    });
    return false
  }

  function prevAni2(){
      $('.container1 .artist_div .page').eq(-1).prependTo($('.container1 .artist_div'));
      $('.container1 .artist_div').css({'margin-left':-wd2+'px'});
      $('.container1 .artist_div').not(':animated').animate({'margin-left': '0px'
      },2000)
      return false
    }
    

  $('#next1').click(function(){
    clearInterval(intv2);
    nextAni2();
    var  intv2 = setInterval(function(){
      nextAni2();
    },4000);
    return false

  });

  $('#prev1').click(function(){
    clearInterval(intv2);
    prevAni2();
    var  intv2 = setInterval(function(){
      nextAni2();
    },4000);
    return false
  });



  // 뉴릴리즈
  let wd3 = $('.album_list ul li').width();
  let intv3 = setInterval(function(){
    nextAni3();
    return false
  },4000);

  function nextAni3(){
    $('.album_list ul').not(':animated').animate({
      'margin-left': -wd3+'px'
    },1000,function(){
      $('.album_list ul li').removeClass('middle');
      $('.album_list ul li').eq(0).appendTo($('.album_list ul'));
      $('.album_list ul').css({'margin-left':'0px'});
      $('.album_list ul li').eq(2).addClass('middle');
    });
    return false
  }

  function prevAni3(){
      $('.album_list ul li').eq(-1).prependTo($('.album_list ul'));
      $('.album_list ul li').removeClass('middle');
      $('.album_list ul li').eq(2).addClass('middle');
      $('.album_list ul').css({'margin-left':-wd3+'px'});
      $('.album_list ul').not(':animated').animate({
        'margin-left': '0px'
      },1000)
      return false
    }
    


  $('#next2').click(function(){
    clearInterval(intv3);
    nextAni3();
    var  intv3 = setInterval(function(){
      nextAni3();
    },4000);
    return false

  });

  $('#prev2').click(function(){
    clearInterval(intv3);
    prevAni3();
    var  intv3 = setInterval(function(){
      nextAni3();
    },4000);
    return false
  });



  // 멀티메디아

  $(window).resize(function(){ 
    if (window.innerWidth > 767) {  

    var wd4 = $('.multi_div .media  iframe').height();
    var intv4 = setInterval(function(){nextAni4();},4000);

    function nextAni4(){
      $('.multi_div').not(':animated').animate({
        'margin-top': -wd4+'px'
      },1000,function(){
        $('.multi_div .media').eq(0).appendTo($('.multi_div'));
        $('.multi_div').css({'margin-top':'0px'});
        
        $('.pegnination li').eq(0).appendTo($('.pegnination'));
        $('.pegnination li').eq(0).addClass('on');
        $('.pegnination li').not(':first-child').removeClass('on');
      });
      return false;
    }

    function prevAni4(){
        $('.multi_div .media').eq(2).prependTo($('.multi_div'));
        $('.multi_div').css({'margin-top':-wd4+'px'});
        $('.multi_div').not(':animated').animate({
          'margin-top': '0px'
        },1000);

        $('.pegnination li').eq(2).prependTo($('.pegnination'));
        $('.pegnination li').eq(0).addClass('on');
        $(".pegnination li").not(":first-child").removeClass("on");
        return false;
      }

    $('.next4').click(function(){
      clearInterval(intv4);
      nextAni4();
      var  intv4 = setInterval(function(){nextAni4();},4000);
      return false
    });

    $('.prev4').click(function(){
      clearInterval(intv4);
      prevAni4();
      var intv4 = setInterval(function(){nextAni4();},4000);
      return false;
    });

    $('.pegnination li').click(function(){
      clearInterval(intv4);
          var idx = $(this).index()-1;
          for(var i=0;i<idx;i++){
              $(".multi_div .media").eq(0).appendTo($(".multi_div"));
              $(".pegnination li").eq(0).appendTo($(".pegnination"));
          }
          nextAni4();
          var intv4 = setInterval(function(){ nextAni4(); }, 3000);
    });

    }else if(window.innerWidth < 768){
      
      
        
        let wd4 = $('.multi_div .media iframe').width();
        let intv4 = setInterval(function(){
          nextAni4();
        },4000);
        
        function nextAni4(){
          $('.multi_div').not(':animated').animate({
            'margin-left': -wd4+'px'
          },1000,function(){
            $('.multi_div .media').eq(0).appendTo($('.multi_div'));
            $('.multi_div').css({'margin-left':'0px'});
            
            $('.pegnination li').eq(0).appendTo($('.pegnination'));
            $('.pegnination li').eq(0).addClass('on');
            $(".pegnination li").not(":first-child").removeClass("on");
        
          });
          return false;
        }
        
        function prevAni4(){
            $('.multi_div .media').eq(2).prependTo($('.multi_div'));
            $('.multi_div').css({'margin-left':-wd4+'px'});
            $('.multi_div').not(':animated').animate({
              'margin-left': '0px'
            },1000);
        
            $(".pegnination li").eq(2).prependTo($(".pegnination"));
            $(".pegnination li").eq(0).addClass("on");
            $(".pegnination li").not(":first-child").removeClass("on");
        
            return false;
          }
          
        $('.next4').click(function(){
          clearInterval(intv4);
          nextAni4();
          var  intv4 = setInterval(function(){
            nextAni4();
          },4000);
        return false
        
        });
        
        $('.prev4').click(function(){
          clearInterval(intv4);
          prevAni4();
          var intv4 = setInterval(function(){
            nextAni4();
          },4000);
          return false;
        });
        
        $('.pegnination li').click(function(){
          clearInterval(intv4);
              var idx = $(this).index()-1;
              for(var i=0;i<idx;i++){
                  $(".multi_div .media").eq(0).appendTo($(".multi_div"));
                  $(".pegnination li").eq(0).appendTo($(".pegnination"));
              }
              nextAni4();
              var intv4 = setInterval(function(){ nextAni4(); }, 3000);
        });
      }

  }).resize(); 


  //상단스크롤
  window.addEventListener('scroll',function(){
    scrollAmount= this.pageYOffset;
    if(scrollAmount>0){
      $('.nav_inner').addClass('scroll');
      $('.header_logo').html("<img src='./images/common/CI.svg' alt='logo_W' id='logo'>");
      $('nav > label .nav_div span').css({'background':'#000'});

    }else{
      $('.header_logo').html("<img src='./images/common/CI_white.svg' alt='logo_W' id='logo'>");
      $('.nav_inner').removeClass('scroll');
      $('nav > label .nav_div span').css({'background':'#fff'});
    }
  });


  //   스크롤 바
  $('html,body').animate({scrollTop:0});
  $('#menu1').click(function(){
      $('html,body').animate({scrollTop:0},1000);
      $('.page_nav span').removeClass('select');
      $('#menu1').addClass('select');
      
  })
  $('#menu2').click(function(){
      $('html,body').animate({scrollTop:$('.artist_con').offset().top},1000);
      $('.page_nav span').removeClass('select');
      $('#menu2').addClass('select');
      return false
  })
  $('#menu3').click(function(){
      $('html,body').animate({scrollTop:$('.container2').offset().top},1000);
      $('.page_nav span').removeClass('select');
      $('#menu3').addClass('select');
      return false;
  })
  $('#menu4').click(function(){
      $('html,body').animate({scrollTop:$('.container3').offset().top},1000);
      $('.page_nav span').removeClass('select');
      $('#menu4').addClass('select');
      return false
  })
  $('#menu5').click(function(){
      $('html,body').animate({scrollTop:$('.container4').offset().top},1000);
      $('.page_nav span').removeClass('select');
      $('#menu5').addClass('select');
      return false;
  })
  $('#menu6').click(function(){
      $('html,body').animate({scrollTop:$('section:last-child').offset().top},1000);
      $('.page_nav span').removeClass('select');
      $('#menu6').addClass('select');
      return false;
  })
    


});