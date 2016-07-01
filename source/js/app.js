'use strict';

// FLIP CARD

(function() {
    $('.login').on('click', function(event) {
        event.preventDefault();
        $('.block-info').addClass('flip-cart');
        $('.user-authorize').addClass('flip-entry');
        $('.login').css('display','none');
    });

    $('.home-link').on('click', function(event) {
        event.preventDefault();
        $('.block-info').toggleClass('flip-cart');
        $('.user-authorize').toggleClass('flip-entry');
        $('.login').css('display','block');
    });

    $(document).on('keyup', function(close) {
        if (close.keyCode == 27) {
            $('.block-info').removeClass('flip-cart');
            $('.user-authorize').removeClass('flip-entry');
            $('.login').css('display','block');
        }
    });
})();


// MENU
(function () {
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
})();
