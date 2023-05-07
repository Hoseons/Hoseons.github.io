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




//관련기관
$('.sub_menu').hide()

$('#associate').hover(function(){
  $('.sub_menu').stop().slideDown()
},function(){
  $('.sub_menu').stop().slideUp()
});

// 탭
$('.content_box > ul >li').hide()
$('#filter1').show()

$('.filter li').click(function(){
  var Tabb = $(this).children('a').attr('href')
  
  $('.filter li').removeClass('on')
  $(this).addClass('on')

  $('.content_box > ul >li').hide()
  $(Tabb).show()
  return false
});

});