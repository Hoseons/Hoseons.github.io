
// new items
$(document).ready(function(){
//뉴
let wdd=$('.container5 .product_list ul li').width();//

function nextAni(){
  $('.container5 .product_list ul').not(':animated').animate({
    'margin-left':-20-wdd+'px'
  },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
      $('.container5 .product_list ul li').eq(0).appendTo($('.container5 .product_list ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
      $('.container5 .product_list ul').css({marginLeft:'0px'});
  });

}//다음버튼 동작
function prevAni(){
  $('.container5 .product_list ul li').eq(-1).prependTo($('.container5 .product_list ul'));//4번사진을 슬라이드 앞에 배치해라
  $('.container5 .product_list ul').css({'margin-left':-20-wdd+"px"});
  $('.container5 .product_list ul').not(':animated').animate({
    'margin-left':'0px'
  },1000)
}//이전버튼 동작

/* 다음버튼 클릭 */
$('.next').click(function(){
//자동동작 멈추고
nextAni();//nextAni() 함수 실행

});
/* 이전버튼 클릭 */
$('.prev').click(function(){

prevAni();

});

//베스트
let wddd=$('.container6 .product_list ul li').width();//

function nextAni2(){
  $('.container6 .product_list ul').not(':animated').animate({
    'margin-left':-20-wddd+'px'
  },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
      $('.container6 .product_list ul li').eq(0).appendTo($('.container6 .product_list ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
      $('.container6 .product_list ul').css({marginLeft:'0px'});
  });

}//다음버튼 동작
function prevAni2(){
  $('.container6 .product_list ul li').eq(-1).prependTo($('.container6 .product_list ul'));//4번사진을 슬라이드 앞에 배치해라
  $('.container6 .product_list ul').css({'margin-left':-20-wddd+"px"});
  $('.container6 .product_list ul').not(':animated').animate({
    'margin-left':'0px'
  },1000)
}//이전버튼 동작

/* 다음버튼 클릭 */
$('.next2').click(function(){
//자동동작 멈추고
nextAni2();//nextAni() 함수 실행

});
/* 이전버튼 클릭 */
$('.prev2').click(function(){

prevAni2();

});



});
