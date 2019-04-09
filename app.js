let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: 51.9181097, lng: 4.4876019},
    mapTypeId: 'terrain'
  });

  let flightPlanCoordinates = [
    {lat: 51.917122, lng: 4.483987},
    {lat: 51.918208, lng: 4.489325},
    // {lat: -18.142, lng: 178.431},
    // {lat: -27.467, lng: 153.027}
  ];
  let flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}
