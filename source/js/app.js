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
(function () {
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
    sandwich.css('visibility',' hidden');
    close_bnt.show();
}
function onClickClose(e){
    e.preventDefault();
    bgMenu.toggleClass('active');
    content.toggleClass('content_show');
    sandwich.css('visibility',' visible');
    close_bnt.hide();
}
})();

// Blog-menu
//====================
(function () {
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


var sidebar = $('.blog__themes_sidebar'),
    sidebar_btn = $('.sidebar_btn');

sidebar_btn.on('click',sidebar_active);

function sidebar_active(e) {
    e.preventDefault();
    sidebar.toggleClass('sidebar_active');
    sidebar_btn.toggleClass('sidebar_btn_active');
}
})();
// SCROLLBAR
//=======================================================
(function() {
    $('.blog__themes a').on('click',function (e) {
        e.preventDefault();
        showArticle($(this).attr('href'),true);
    });

    $(window).scroll(function () {
        checkArticle();
        var
            fixed = $('.blog__themes ul'),
            scroll = $(window).scrollTop();

        if($('.blog__themes').length > 0) {
            if ((scroll) > $('.blog__themes').offset().top - 100) {
                fixed.addClass('sidebar--fixed');
            } else {
                fixed.removeClass('sidebar--fixed');
            }
        }
    });


    function showArticle(article, isAnimate) {
        var
            direction = article.replace(/#/, ''),
            article = $('.blog__content article').filter('[data-article="' + direction + '"]'),
            articlePos = article.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop:articlePos},500 );
        } else {
            $('body, html').scrollTop(articlePos);
        }
    };


    function checkArticle() {
        $('.blog__content article').each(function () {
            var
                $this = $(this),
                top = $this.offset().top - 200,
                bottom = top+$this.height(),
                scroll = $(window).scrollTop();

            if (top < scroll && bottom > scroll) {
                var
                    focus = $this.data('article'),
                    link = $('.blog__themes.fixed a').filter('[href="#'+ focus + '"]');

                link.addClass('blog__link_item-active').parent().siblings().children().removeClass('blog__link_item-active');
            }
        })
    };
})();
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

//========================
// Slider
//========================
(function () {
    'use strict';
    var
        $nextBtn = $('.nav_prev'),
        $prevBtn = $('.nav_next'),
        $slideItemsRight = $nextBtn.find('.slider_item'),
        $slideItemsLeft = $prevBtn.find('.slider_item'),
        $mainSlide = $('.main_picture'),
        $textSlide = $('.descr_container'),
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
        changeText($textSlide);
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
    function changeText(itemText) {
        itemText.filter('.descr_container.active').removeClass('active');
        itemText.eq(currentSlideIndex).addClass('active');
    }
})();


// PRELOADER
//=======================================================
$(document).ready(function() {
    $('.preloader').removeClass('preloader-noJs');
    $('body').css('overflow', 'hidden');
    $('body').bind('touchmove', function(e){e.preventDefault()});

    var imgs = [];

    $.each($('*'), function() {
        var $this = $(this),
            background = $this.css('background-image'),
            img = $this.is('img');

        if(background != 'none') {
            var path = background.replace('url("', '').replace('")', '');
            imgs.push(path);
        }
        if(img) {
            var path = $this.attr('src');
            if (path) {
                imgs.push(path);
            }
        }
    });

    var percents = 1,
        lastRealPercent = 0;

    for (var i = 0; i < imgs.length; i++) {
        var image = $('<img>', {
            attr: {
                src: imgs[i]
            }
        });

        image.load(function() {
            setPercents(imgs.length, percents);
            percents++;
        });
    }

    function setPercents(total, current) {
        var percent = Math.ceil(current / total * 100);

        var iterator = setInterval(function() {
            if(lastRealPercent >= percent) {
                clearInterval(iterator);
                iterator = null;
                return;
            }

            var dash = Math.ceil(316 - lastRealPercent * 1.58);
            $('.circle-bar').css({'stroke-dashoffset': dash + 'px'});
            $('.circle-txt').text(lastRealPercent);

            if (percent >= 100) {
                $('.circle-small').css('animation-iteration-count', '1');
            };

            lastRealPercent++;
        }, 5);
    }
});


$(window).load(function() {
    $('body').css('overflow', 'visible');
    $('body').unbind('touchmove');

    $('.preloader-inner').fadeOut(500, function() {
        $('.preloader').css('display', 'none');
    });
});
//
(function () {
var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el) {
    el.style.opacity = 1;
    var interhellopreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            hellopreloader.style.display = "none";
        }
    }, 16);
}window.onload = function () {
    setTimeout(function () {
        fadeOutnojquery(hellopreloader);
    }, 500);
};
})();



//Parallax page header
(function() {

    $(window).scroll(function() {
        var wScroll = $(window).scrollTop();

        (function(){

            var
                sectionText = $('.user_block_bg'),
                user = $('.user_block_photo,.user_block_name,.user_block_descr');

            slideIt(sectionText, wScroll / 30);
            slideIt(user, wScroll / 5);



            function slideIt(block, strafeAmount) {
                var strafe = -strafeAmount,
                    transformString = 'translate3d(0,' + strafe + '%,0)';

                if (block == sectionText) {
                    strafe = -50-strafeAmount;
                    transformString = 'translate3d(-50%,' + strafe + '%,0)';}
                block.css({
                    'transform': transformString
                });
            }


        }());


    });


})();