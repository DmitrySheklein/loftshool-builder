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


(function () {
    var map;

    $(document).ready(function () {
        initMap();
    });

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            disableDefaultUI: true,
            scrollwheel: false,
            center: {lat: -34.397, lng: 150.644},
            zoom: 12
        });
    }
});

// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 8
//     });
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuJCgnLmxvZ2luJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuYmxvY2staW5mbycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICQoJy51c2VyLWNhcmQnKS5hZGRDbGFzcygnZmxpcHBlZCcpO1xyXG4gICAgJChcIi51c2VyLWF1dGhvcml6ZVwiKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgLy8gJCgnLmxvZ2luJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG59KTtcclxuXHJcbiQoJy5ob21lJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuYmxvY2staW5mbycpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAkKFwiLnVzZXItYXV0aG9yaXplXCIpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8v0JzQtdC90Y5cclxuJCgnLnNhbmR3aWNoJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuc2FuZHdpY2gnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAkKCcubWVudScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5uYXZfX2xpc3QnKS5hZGRDbGFzcygnbmF2X19saXN0X3Nob3cnKTtcclxufSk7XHJcblxyXG4kKCcjYnRuX2Nsb3NlJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICQoJy5zYW5kd2ljaCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbn0pO1xyXG5cclxuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWFwO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0TWFwKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xuICAgICAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgIGNlbnRlcjoge2xhdDogLTM0LjM5NywgbG5nOiAxNTAuNjQ0fSxcbiAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG4vLyB2YXIgbWFwO1xuLy8gZnVuY3Rpb24gaW5pdE1hcCgpIHtcbi8vICAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuLy8gICAgICAgICBjZW50ZXI6IHtsYXQ6IC0zNC4zOTcsIGxuZzogMTUwLjY0NH0sXG4vLyAgICAgICAgIHpvb206IDhcbi8vICAgICB9KTtcbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
