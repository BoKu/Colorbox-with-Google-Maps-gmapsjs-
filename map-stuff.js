"use strict";
$( document ).ready(function() {
  var map;
  $('#go').on('click', function(){
    $.colorbox({
        width: "90%",
        height: "90%",
        inline: true,
        href : "#map",
        onComplete: function(){
            $('#map').show();
            
            map = new GMaps({
                zoom: 16,
                disableDefaultUI: true,
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: true,
                div: '#map',
                lat: 37.4219999,
                lng: -122.0862462
            });
            
            GMaps.geocode({
                address: $('#address').val(),
                callback: function(results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        map.setCenter(latlng.lat(), latlng.lng());
                        map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
            
        },
        onClosed: function(){
            $('#map').hide()
        }
    });
  });
});
