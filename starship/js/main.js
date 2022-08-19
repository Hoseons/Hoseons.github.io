"use strict"

$(document).ready(function(){




let wdb = $('header_banner .video_div').width();
let intvb = setInterval(function(){
  nextAni();
},4000);

function nextAni(){
  $('header_banner .video_div').not(':animated').animate({
    'margin-left': -wdb+'px'
  },1000,function(){
    $('header_banner .video_div video').eq(0).appendTo($('header_banner .video_div'));
    $('header_banner .video_div').css({'margin-left':'0px'});
  });
}




// $('.next').click(function(){
// clearInterval(intvb);
// nextAni();
// let intvb = setInterval(function(){
//   nextAni();
// },4000);


// });

// $('.prev').click(function(){
//   clearInterval(intvb);
//   prevAni();
//   let intvb = setInterval(function(){
//     nextAni();
//   },4000);
  
//   });





let wd2 = $('.container1 .page').width();
let intv2 = setInterval(function(){
  nextAni2();
},4000);

function nextAni2(){
  $('.container1 .artist_div').not(':animated').animate({
    'margin-left': -wdb+'px'
  },1000,function(){
    $('.container1 .artist_div .page').eq(0).appendTo($('.container1 .artist_div'));
    $('.container1 .artist_div').css({'margin-left':'0px'});
  });
}

function prevAni2(){
    $('.container1 .artist_div .page').eq(-1).prependTo($('.container1 .artist_div'));
    $('.container1 .artist_div').css({'margin-left':-wdb+'px'});
    $('.container1 .artist_div').not(':animated').animate({
      'margin-left': '0px'
    },1000)
  }
  


$('.arrow_right').click(function(){
clearInterval(intv2);
nextAni();
let intv2 = setInterval(function(){
  nextAni2();
},4000);


});

$('.arrow_left').click(function(){
  clearInterval(intv2);
  prevAni2();
  let intv2 = setInterval(function(){
    nextAni2();
  },4000);
  
  });

// 뉴릴리즈
let wd3 = $('.album_list ul li').width();
let intv3 = setInterval(function(){
  nextAni3();
  return false
},4000);

function nextAni3(){
  $('.album_list ul').not(':animated').animate({
    'margin-left': -wd3+'px'
  },1000,function(){
    $('.album_list ul li').removeClass('middle');
    $('.album_list ul li').eq(0).appendTo($('.album_list ul'));
    $('.album_list ul').css({'margin-left':'0px'});
    $('.album_list ul li').eq(2).addClass('middle');
  });
  return false
}

function prevAni3(){
    $('.album_list ul li').eq(-1).prependTo($('.album_list ul'));
    $('.album_list ul li').removeClass('middle');
    $('.album_list ul li').eq(2).addClass('middle');
    $('.album_list ul').css({'margin-left':-wd3+'px'});
    $('.album_list ul').not(':animated').animate({
      'margin-left': '0px'
    },1000)
    return false
  }
  


$('.next3').click(function(){
clearInterval(intv3);
nextAni3();
let intv3 = setInterval(function(){
  nextAni3();
},4000);
return false

});

$('.prev3').click(function(){
  clearInterval(intv3);
  prevAni3();
  let intv3 = setInterval(function(){
    nextAni3();
  },4000);
  return false
});
// 멀티메디아


let wd4 = $('.multi_div .media video').height();
let intv4 = setInterval(function(){
  nextAni4();
},4000);

function nextAni4(){
  $('.multi_div').not(':animated').animate({
    'margin-top': -wd4+'px'
  },1000,function(){
    $('.multi_div .media').eq(0).appendTo($('.multi_div'));
    $('.multi_div').css({'margin-top':'0px'});
  });
  return false
}

function prevAni4(){
    $('.multi_div .media').eq(-1).prependTo($('.multi_div'));
    $('.multi_div').css({'margin-top':-wd4+'px'});
    $('.multi_div').not(':animated').animate({
      'margin-top': '0px'
    },1000)
    return false
  }
  


$('.next4').click(function(){
clearInterval(intv4);
nextAni4();
let intv4 = setInterval(function(){
  nextAni4();
},4000);
return false

});

$('.prev4').click(function(){
  clearInterval(intv4);
  prevAni4();
  let intv4 = setInterval(function(){
    nextAni4();
  },4000);
  return false


});


//   스크롤 바
$('html,body').animate({scrollTop:0});
$('#menu1').click(function(){
    $('html,body').animate({scrollTop:0},1000);
    $('.page_nav span').removeClass('select')
    $('#menu1').addClass('select')
    return false
})
$('#menu2').click(function(){
    $('html,body').animate({scrollTop:$('.page_nav span:nth-of-type(2)').offset().top},1000);
    $('.page_nav span').removeClass('select')
    $('#menu2').addClass('select')
    return false
})
$('#menu3').click(function(){
    $('html,body').animate({scrollTop:$('.page_nav span:nth-of-type(3)').offset().top},1000);
    $('.page_nav span').removeClass('select')
    $('#menu3').addClass('select')
    return false
})
$('#menu4').click(function(){
    $('html,body').animate({scrollTop:$('.page_nav span:nth-of-type(4)').offset().top},1000);
    $('.page_nav span').removeClass('select')
    $('#menu4').addClass('select')
    return false
})
$('#menu5').click(function(){
    $('html,body').animate({scrollTop:$('.page_nav span:nth-of-type(5)').offset().top},1000);
    $('.page_nav span').removeClass('select')
    $('#menu5').addClass('select')
    return false
})
$('#menu6').click(function(){
    $('html,body').animate({scrollTop:$('.page_nav span:nth-of-type(6)').offset().top},1000);
    $('.page_nav span').removeClass('select')
    $('#menu6').addClass('select')
    return false
})
  


});