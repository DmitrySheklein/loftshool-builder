'use strict';

// FLIP CARD
//
(function () {
    $('.login').on('click', function (event) {
        event.preventDefault();
        $('.block-info').addClass('flip-cart');
        $('.user-authorize').addClass('flip-entry');
        $('.login').css('visibility', 'hidden');
    });

    $('.home-link').on('click', function (event) {
        event.preventDefault();
        $('.block-info').toggleClass('flip-cart');
        $('.user-authorize').toggleClass('flip-entry');
        $('.login').css('visibility', 'visible');
    });

    $(document).on('keyup', function (close) {
        if (close.keyCode == 27) {
            $('.block-info').removeClass('flip-cart');
            $('.user-authorize').removeClass('flip-entry');
            $('.login').css('visibility', 'visible');
        }
    });
})();


// // MENU
//

var bgMenu = $('.nav_menu'),
    content = $('.nav_content'),
    sandwich = $('.sandwich'),
    close_bnt = $('.menu-toggle');


$('.sandwich').on('click', onClickToggle);

$('.menu-toggle').on('click', onClickClose);

function onClickToggle(e){
    e.preventDefault();
    bgMenu.toggleClass('active');
    content.toggleClass('content_show');
    sandwich.hide();
    close_bnt.show();
}
function onClickClose(e){
    e.preventDefault();
    bgMenu.toggleClass('active');
    content.toggleClass('content_show');
    sandwich.show();
    close_bnt.hide();
}
// Blog-menu
//====================

(function () {
    if($('.static .blog__list').length){
        var menu = $('.static .blog__list'),
            sidebar = $('.static .blog__list_wrapper'),
            menuClone = sidebar.clone(),
            fixedSidebar = $('.blog__themes.fixed');

    $(window).scroll(function () {
        var wScroll = $(window).scrollTop(),
            stickyStart = sidebar.offset().top;

        if (wScroll >= stickyStart) {
            if (!fixedSidebar.find('.blog__list_wrapper').length) {
                fixedSidebar.append(menuClone);
                menu.hide();
            }
        } else {
            fixedSidebar.find('.blog__list_wrapper').remove();
            menu.show();
        }
    });
}

})();

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

$(window).on('mousemove', function (e) {
    var mouseX = e.pageX,
        mouseY = e.pageY,
        w = (window.innerWidth / 2),
        h = (window.innerHeight / 2),
        MoveX = ((w * 0.01) - mouseX) * 0.05,
        MoveY = ((h * 0.01) - mouseY) * 0.05;

    $('.mountain_bg').css({
        'transform': 'translate3d(' + MoveX + 'px, ' + MoveY + 'px, 0)'
    });

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

        if ($this.hasClass('nav_prev')) {
            if (currentSlideIndex - 1 < 0) {
                currentSlideIndex = $slideItemsRight.length - 1;
            } else {
                currentSlideIndex = currentSlideIndex - 1;
            }
        } else if ($this.hasClass('nav_next')) {
            if (currentSlideIndex + 1 > $slideItemsRight.length - 1) {
                currentSlideIndex = 0;
            } else {
                currentSlideIndex = currentSlideIndex + 1;
            }
        }
        // console.log(currentSlideIndex);
        changeMainPic($slideItemsRight);
        slideInLeftPreview($slideItemsLeft);
        slideInRightPreview($slideItemsRight);
    }

    function changeMainPic(slideItems) {
        var nextImgSrc = slideItems.eq(currentSlideIndex).find('img').attr('src');

        $mainSlide.fadeOut(function () {
            $mainSlide.attr('src', nextImgSrc);
            $(this).fadeIn();
        });
    }

    function slideInLeftPreview(slideItems) {
        var nextImgIndex;

        if(currentSlideIndex + 1 >= slideItems.length){
            nextImgIndex = 0;
        }else {
            nextImgIndex = currentSlideIndex + 1;
        }
        slideItems.filter('.slider_item_active').removeClass('slider_item_active');
        slideItems.eq(nextImgIndex).addClass('slider_item_active');
    }

    function slideInRightPreview(slideItems) {
        var nextImgIndex;

        if (currentSlideIndex == 0){
            nextImgIndex = slideItems.length - 1;
        }else {
            nextImgIndex = currentSlideIndex - 1;
        }

        slideItems.filter('.slider_item_active').removeClass('slider_item_active');
        slideItems.eq(nextImgIndex).addClass('slider_item_active');
    }
})();