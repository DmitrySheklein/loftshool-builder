'use strict';

// FLIP CARD
//
(function() {
    $('.login').on('click', function(event) {
        event.preventDefault();
        $('.block-info').addClass('flip-cart');
        $('.user-authorize').addClass('flip-entry');
        $('.login').css('visibility','hidden');
    });

    $('.home-link').on('click', function(event) {
        event.preventDefault();
        $('.block-info').toggleClass('flip-cart');
        $('.user-authorize').toggleClass('flip-entry');
        $('.login').css('visibility','visible');
    });

    $(document).on('keyup', function(close) {
        if (close.keyCode == 27) {
            $('.block-info').removeClass('flip-cart');
            $('.user-authorize').removeClass('flip-entry');
            $('.login').css('visibility','visible');
        }
    });
})();


// // MENU
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

// Blog-menu
//====================

$(window).scroll(function () {
    var
        wScroll = $(window).scrollTop(),
        menu = $('.static .blog__list'),
        sidebar = $('.static .blog__list_wrapper'),
        stickyStart = sidebar.offset().top,
        menuClone = sidebar.clone(),
        fixedSidebar = $('.blog__themes.fixed');

    if (wScroll >= stickyStart){
        // menu.css({
        //     top : wScroll - stickyStart + 'px'
        // })
        if(fixedSidebar.find('.blog__list_wrapper').length){
            fixedSidebar.append(menuClone);
            menu.hide();
        }else {
            fixedSidebar.find('.blog__list_wrapper').remove();
            menu.show();
        }
    }
});

// $(window).scroll(function () {
//     // checkSection();
//     var sticky = $('.blog__themes'),
//         scroll = $(window).scrollTop();
//     if($('.blog__themes').length > 0) {
//         if (scroll > $('.blog__themes').offset().top) sticky.addClass('fixed');
//         else sticky.removeClass('fixed');
//     }
// });


// Paralax


$(window).on('mousemove', function(e){
    var mouseX = e.pageX,
        mouseY = e.pageY,
        w = (window.innerWidth/2),
        h = (window.innerHeight/2),
        layer = $('.mountain_bg').find('img');


    layer.map(function (key,value) {
        // console.log(key,value);
        var widthPos = w * (key / 100);
        var heightPos = h * (key / 100);
        $('value').css({
            'transform' : 'translate3d(' + widthPos + 'px, ' + heightPos + 'px, 0)'
        })
    });
});

