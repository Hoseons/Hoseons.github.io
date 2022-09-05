"use strict"
$(document).ready(function(){
    

// 칼로리버튼
$('.con2_img ul').hide();
$('.con2_img #c_btn1').show();
$('.cal_btn_wrap div').click(function(){
    $('.cal_btn_wrap div').removeClass('on')
    $(this).addClass('on')

    var list = $(this).children('a').attr('href');
    $('.con2_img ul').hide();
    $(list).fadeIn(600);
    return false;

});

// ㅂㅐ너
let wdd=$('.bn_group video').width();//
var intv = setInterval(function(){
  nextAni();
},5000);
function nextAni(){
  $('.bn_group').not(':animated').animate({
    'margin-left':-wdd+'px'
  },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
      $('.bn_group video').eq(0).appendTo($('.bn_group'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
      $('.bn_group').css({marginLeft:'0px'});
  });


}//다음버튼 동작
function prevAni(){
  $('.bn_group video').eq(-1).prependTo($('.bn_group'));//4번사진을 슬라이드 앞에 배치해라
  $('.bn_group').css({'margin-left':-wdd+"px"});
  $('.bn_group').not(':animated').animate({
    'margin-left':'0px'
  },1000)

}//이전버튼 동작

/* 다음버튼 클릭 */
$('.next1').click(function(){
  clearInterval(intv)
//자동동작 멈추고
nextAni();//nextAni() 함수 실행
var intv = setInterval(function(){
  nextAni();
},5000);
});
/* 이전버튼 클릭 */
$('.prev1').click(function(){
  clearInterval(intv)
prevAni();
var intv = setInterval(function(){
  nextAni();
},5000);
});




// 베스트 아이템
let wddd=$('.container1 .best-item div article').width();//
var intv1 = setInterval(function(){
  nextAni2();
},4000);

function nextAni2(){
  $('.container1 .best-item div').not(':animated').animate({
    'margin-left':-wddd+'px'
  },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
      $('.container1 .best-item div article').eq(0).appendTo($('.container1 .best-item div'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
      $('.container1 .best-item div').css({marginLeft:'0px'});
  });

}//다음버튼 동작
function prevAni2(){
  $('.container1 .best-item div article').eq(-1).prependTo($('.container1 .best-item div'));//4번사진을 슬라이드 앞에 배치해라
  $('.container1 .best-item div').css({'margin-left':-wddd+"px"});
  $('.container1 .best-item div').not(':animated').animate({
    'margin-left':'0px'
  },1000)


}//이전버튼 동작

/* 다음버튼 클릭 */
$('.next2').click(function(){
  clearInterval(intv1)
//자동동작 멈추고
nextAni2();//nextAni() 함수 실행
var intv1 = setInterval(function(){
  nextAni();
},4000);

});
/* 이전버튼 클릭 */
$('.prev2').click(function(){
  clearInterval(intv1)
prevAni2();
var intv1 = setInterval(function(){
  nextAni();
},4000);

});

//레시피

var intv2 = setInterval(function(){
  nextAni3();
},4000);
function nextAni3(){
  $('.container3 .con3_images').not(':animated').animate({
    'margin-left':'-320px'
  },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
      $('.container3 .con3_images > ul > li').eq(0).appendTo($('.container3 .con3_images > ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
      $('.container3 .con3_images').css({marginLeft:'0px'});
     
      $('.container3 .con3_images >ul .receipt2_desc').removeClass('on')
      $('.container3 .con3_images >ul .receipt2_desc').eq(0).addClass('on')

      

  });

}//다음버튼 동작
function prevAni3(){
  $('.container3 .con3_images >ul>li').eq(-1).prependTo($('.container3 .con3_images >ul'));//4번사진을 슬라이드 앞에 배치해라
  $('.container3 .con3_images').css({'margin-left':"-320px"});
  $('.container3 .con3_images').not(':animated').animate({
    'margin-left':'0px'
  },1000)

  $('.container3 .con3_images >ul .receipt2_desc').removeClass('on')
$('.container3 .con3_images >ul .receipt2_desc').eq(0).addClass('on')


}//이전버튼 동작

/* 다음버튼 클릭 */
$('.next3').click(function(){
  clearInterval(intv2)
//자동동작 멈추고
nextAni3();//nextAni() 함수 실행
var intv2 = setInterval(function(){
  nextAni3();
},4000);
});
/* 이전버튼 클릭 */
$('.prev3').click(function(){
clearInterval(intv2)
prevAni3();
var intv2 = setInterval(function(){
  nextAni3();
},4000);
});

// 슬라이더
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 5,
  freeMode: true,
  scrollbar: {
  el: '.swiper-scrollbar', 
draggable: true,
},
});

});
