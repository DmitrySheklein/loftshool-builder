'use strict';

$('.login').on("click", function(e){
    event.preventDefault();
    $('.block-info').css('display','none');
    $(".user-authorize").css('display','block');
});

$('.home').on("click", function(e){
    event.preventDefault();
    $('.block-info').css('display','block');
    $(".user-authorize").css('display','none');
});