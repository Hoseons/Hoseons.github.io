$(document).ready(function(){
    $('.main_img').hide();
    $('#img1').show();

$('.small_img li').hover(function(){
    var tab = $(this).children('a').attr('href')
    $('.main_img').hide();
    $(tab).show()
});

// function fnCalCount(type, ths){
//     var $input = $(ths).parents("td").find("input[name='pop_out']");
//     var tCount = Number($input.val());
//     var tEqCount = Number($(ths).parents("tr").find("td.bseq_ea").html());
    
//     if(type=='p'){
//         if(tCount < tEqCount) $input.val(Number(tCount)+1);
        
//     }else{
//         if(tCount >0) $input.val(Number(tCount)-1);    
//         }
// }


});