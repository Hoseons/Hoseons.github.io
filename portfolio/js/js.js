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







   $(window).resize(function(){ 
    if (window.innerWidth > 767) {  // 다바이스 크기가 480이상일때 
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
    
    }
  }).resize(); 





    // 키워드 선택
    $('.keyword .wrap li').click(function(){
        $('.keyword .wrap li').removeClass('on')
        $(this).addClass('on')
        // return false
    });

   
  
});