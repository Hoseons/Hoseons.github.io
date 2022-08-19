$(document).ready(function() {




//intro
 setInterval(function(){
    load();
},1200)

function load(){
    $('main .intro .first_page').animate({opacity:'0'},500,function(){
        $('main .intro').addClass('on');
        $('main .intro .second_page').animate({opacity:'1', top: '50%'},800)
        return false
    })
}




// 슬라이드
    var wd = parseInt($(window).width());
    if(wd>=770){
        $('#fullpage').fullpage({
        // sectionsColor: ['#fff', '#eae6e7', '#fff', '#a4a4a4'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage','5thPage', '6thPage','7thPage'],
        menu: '#menu',
        afterLoad: function(anchorLink, index) {
            //section 2
            if (index == 2) {
                //moving the image
                $('#section1').find('.profile .inner').delay(1000).animate({
                    opacitiy:'1'
                }, 1000, 'easeOutExpo');



            }
            //section 3
            if (anchorLink == '3rdPage') {
                //moving the image
                $('#section2').find('.activity .inner').delay(0).animate({
                    left:'0%'
                }, 500, 'easeOutExpo');
            }

          
               //section 4
               if (anchorLink == '4rdPage') {
                //moving the image
                $('#section3').find('.skills .inner').delay(0).animate({
                    left:'0%'
                }, 500, 'easeOutExpo');
            }



        }
    });
   } 






//    팝어창 
    $('.project_list li ul .pop').click(function(){
       $('.popup').fadeIn()
       $('.dim').fadeIn()
       var show = $(this).children('a').attr('href')
       $('.popup li').removeClass('on')
       $(show).addClass('on')
        return false
    })
    $('.close').click(function(){

        $('.popup').fadeOut()
        $('.dim').fadeOut()
        return false
    }); 

    // 키워드 선택
    $('.keyword .wrap li').click(function(){
        $('.keyword .wrap li').removeClass('on')
        $(this).addClass('on')
        return false
    });

    // 팝업  다음 버튼

    var wd = $('.popup  li img').width();
    function nextAni(){
        $('.popup li div').not(':animated').animate({
          'margin-left':-wd+'px'
        },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
            $('.popup li div img').eq(0).appendTo($('.popup li div'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
            $('.popup li div').css({marginLeft:'0px'});
        });
  
  
      }//다음버튼 동작
      function prevAni(){
        $('.popup li div img').eq(-1).prependTo($('.popup li div'));//4번사진을 슬라이드 앞에 배치해라
        $('.popup li div').css({'margin-left':-wd+"px"});
        $('.popup li div').not(':animated').animate({
          'margin-left':'0px'
        },1000)

  
  
      }//이전버튼 동작
     
      /* 다음버튼 클릭 */
    $('.arrow_right').click(function(){
    
     //자동동작 멈추고
      nextAni();//nextAni() 함수 실행
   
    });
    /* 이전버튼 클릭 */
    $('.arrow_left').click(function(){

      prevAni();
   
    });
  
});