$(document).ready(function(){
  $('.main_nav li').hover(function(){
    $(this).children('.sub').slideDown()
  },function(){
    $(this).children('.sub').slideUp()})
})