(function () {
    var map;

    $(document).ready(function () {
        initMap();
    });

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            disableDefaultUI: true,
            scrollwheel: false,
            styles: [
                {"featureType": "administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4369aa"},{"visibility":"on"}]}
                    ],
            center: {lat: 56.295, lng: 44},
            zoom: 13
        });
    }
})();
