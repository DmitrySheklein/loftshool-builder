'use strict';

$('.login').on("click", function(e){
    event.preventDefault();
    $('.block-info').css('display','none');
    $('.user-card').addClass('flipped');
    $(".user-authorize").css('display','block');
    // $('.login').css('display','none');
});

$('.home').on("click", function(e){
    event.preventDefault();
    $('.block-info').css('display','block');
    $(".user-authorize").css('display','none');
});



//Меню
$('.sandwich').on("click", function(e){
    event.preventDefault();
    $('.sandwich').css('display','none');
    $('#menu').css('display','block');
    $('.menu').addClass('active');
    $('.nav__list').addClass('nav__list_show');
});

$('#btn_close').on("click", function(e){
    event.preventDefault();
    $('#menu').css('display','none');
    $('.sandwich').css('display','block');
});

