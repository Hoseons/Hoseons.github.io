$(document).ready(function(){
  $('.main_nav li').hover(function(){
    $(this).children('.sub').slideDown()
  },function(){
    $(this).children('.sub').slideUp()})
  
    var swiper1 = new Swiper('.swiper1', {
      slidesPerView: 1.5,
      freeMode: true,
      spaceBetween: 10,
    });
    
    var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 1.8,
      freeMode: true,
      spaceBetween: 10,
      
    });
  
})