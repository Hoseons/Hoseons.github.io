$(document).ready(function(){
    
//상단스크롤
window.addEventListener('scroll',function(){
    scrollAmount= this.pageYOffset;
    if(scrollAmount>0){
      $('.nav_inner').addClass('scroll');
      $('.header_logo').innerHTML =` <img src="./images/common/CI.svg" alt="logo_W" id="logo">`;
  
    }else{
      $('.header_logo').innerHTML =` <img src="./images/common/CI_white.svg" alt="logo_W" id="logo">`;
      $('.nav_inner').removeClass('scroll');
    }
  });
  

  $('.inner > div').hide()
  $('#Musician').show()
  $('.kate ul li').click(function(){
    $('.kate ul li').removeClass('on')
    $(this).addClass('on')

    $('.inner > div').hide()
    var Tab = $(this).children('a').attr('href')
    $(Tab).show()
    return false
  })

});