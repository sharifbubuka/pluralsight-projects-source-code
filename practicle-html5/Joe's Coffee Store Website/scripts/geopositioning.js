function createDrivingDirectionsMap(){
    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(OnSuccess, onError, {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 500
        });
    }
    else {
        document.getElementById('map').innerHTML = "No support for Geolocation. We can't find you.";
    }
};

function OnSuccess(position){
    showMap(
    position.coords.latitude,
    position.coords.longitude
    );
};

function onError(){
    var mapDiv = document.getElementById('map');
    switch(error.code){
        case error.PERMISSION_DENIED:
            mapDiv.innerHTML ="User denied the request for geo-location.";
            break;
        case error.POSITION_UNAVAILABLE:
            mapDiv.innerHTML ="Location information is unavailable.";
            break;
        case error.TIMEOUT:
            mapDiv.innerHTML ="The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            mapDiv.innerHTML ="An unknown error occured.";
            break;
    }
};

function showMap(lat, long){
    var directionService = new google.maps.directionService();
    var directionRenderer = new google.maps.directionRenderer();

    var route = {
        origin: new google.maps.LatLng(lat, long),
        destination: "Grote Markt, Brussel",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    var mapotions = {
        zoom: 10,
        center: new google.maps.LatLng(50.8504500,4.3487800),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapotions);
    directionRenderer.setMap(map);
    directionService.route(route,function(result, status){
        if (status === google.maps.DirectionsStatus.OK){
            directionRenderer.setDirections(result);
        }
    });
}

