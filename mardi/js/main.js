
// new items
$(document).ready(function(){
  //뉴
  let wdd=$('.New_container .product_list ul li').width();//

  function nextAni(){
    $('.New_container .product_list ul').not(':animated').animate({
      'margin-left':-20-wdd+'px'
    },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
        $('.New_container .product_list ul li').eq(0).appendTo($('.New_container .product_list ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
        $('.New_container .product_list ul').css({marginLeft:'0px'});
    });

  }//다음버튼 동작
  function prevAni(){
    $('.New_container .product_list ul li').eq(-1).prependTo($('.New_container .product_list ul'));//4번사진을 슬라이드 앞에 배치해라
    $('.New_container .product_list ul').css({'margin-left':-20-wdd+"px"});
    $('.New_container .product_list ul').not(':animated').animate({
      'margin-left':'0px'
    },1000)
  }//이전버튼 동작

  /* 다음버튼 클릭 */
  $('.next').click(function(){nextAni();});
  /* 이전버튼 클릭 */
  $('.prev').click(function(){prevAni();});

//베스트
  let wddd=$('.Best_container .product_list ul li').width();//

  function nextAni2(){
    $('.Best_container .product_list ul').not(':animated').animate({
      'margin-left':-20-wddd+'px'
    },1000,function(){//콜백함수(앞의 애니메이션이 끝난 후의 동작)
        $('.Best_container .product_list ul li').eq(0).appendTo($('.Best_container .product_list ul'));//A.appendTo(B)-->A를 B의 뒤에 배치해라
        $('.Best_container .product_list ul').css({marginLeft:'0px'});
    });

  }//다음버튼 동작
  function prevAni2(){
    $('.Best_container .product_list ul li').eq(-1).prependTo($('.Best_container .product_list ul'));//4번사진을 슬라이드 앞에 배치해라
    $('.Best_container .product_list ul').css({'margin-left':-20-wddd+"px"});
    $('.Best_container .product_list ul').not(':animated').animate({
      'margin-left':'0px'
    },1000)
  }//이전버튼 동작

  /* 다음버튼 클릭 */
  $('.next2').click(function(){nextAni2();});
  /* 이전버튼 클릭 */
  $('.prev2').click(function(){prevAni2();});



});
