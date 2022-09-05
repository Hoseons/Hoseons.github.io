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
  
});