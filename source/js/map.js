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