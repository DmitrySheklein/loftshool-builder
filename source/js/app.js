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
        if(!fixedSidebar.find('.blog__list_wrapper').length){
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

//===============
// Paralax
//===============

$(window).on('mousemove', function(e){
    var mouseX = e.pageX,
        mouseY = e.pageY,
        w = (window.innerWidth/2),
        h = (window.innerHeight/2),
        MoveX = ((w*0.01) - mouseX)*0.05,
        MoveY = ((h*0.01) - mouseY)*0.05;

    $('.mountain_bg').css({
        'transform' : 'translate3d(' + MoveX + 'px, ' + MoveY + 'px, 0)'});

});
// $(window).on('mousemove', function(e){
//     var mouseX = e.pageX,
//         mouseY = e.pageY,
//         w = (window.innerWidth/2),
//         h = (window.innerHeight/2),
//         layer = $('.mountain_bg').find('img');
//
//
//     layer.map(function (key,value) {
//         // console.log(key,value);
//         var widthPos = w * (key / 100);
//         var heightPos = h * (key / 100);
//         $('value').css({
//             'transform' : 'translate3d(' + widthPos + 'px, ' + heightPos + 'px, 0)'
//         })
//     });
// });

//========================
// Slider
//========================
(function () {
    'use strict';
    var
        $nextBtn = $('.nav_next'),
        $prevBtn = $('.nav_prev'),
        $slideItemsRight = $nextBtn.find('.slider_item'),
        $slideItemsLeft = $prevBtn.find('.slider_item'),
        $mainSlide = $('.main_picture'),
        currentSlideIndex = 0;
    
    $(document).ready(function () {
        $nextBtn.on('click', changeSlide);
        $prevBtn.on('click', changeSlide);
    });
    function changeSlide(e) {
        e.preventDefault();

        var $this = $(this);

        if($this.hasClass('.nav_prev')){
            if(currentSlideIndex - 1 < 0){
                currentSlideIndex = $slideItemsRight.length -1;
            }else{
                currentSlideIndex = currentSlideIndex - 1;
            }
        }else if($this.hasClass('.nav_next')){
            if(currentSlideIndex + 1 > $slideItemsRight.length - 1){
                currentSlideIndex = 0;
            }else{
                currentSlideIndex = currentSlideIndex +1;
            }
        }
        // console.log(currentSlideIndex);
        changeMainPic($slideItemsRight);
    }

    function changeMainPic(slideItems) {
        var nextImgSrc = slideItems.eq(currentSlideIndex).find('img').attr('src');

        $mainSlide.fadeOut(function () {
            $mainSlide.attr('src', nextImgSrc);
            $(this).fadeIn();
        })

    }
})();