let light, police, userOne, userTwo, marker;

let lightButton = document.querySelector('.button__light');
let policeButton = document.querySelector('.button__police');
let userButton = document.querySelector('.button__user');
let lightBox = document.querySelector('.button__yellow');
let policeBox = document.querySelector('.button__blue');
let userBox = document.querySelector('.button__green');
lightBox.classList.toggle('button__yellow--clicked')

lightButton.addEventListener('click', () => {
  lightBox.classList.toggle('button__yellow--clicked')
  light.setMap(light.getMap() ? null : map);
});

policeButton.addEventListener('click', () => {
  policeBox.classList.toggle('button__blue--clicked')
  police.setMap(police.getMap() ? null : map);
});

userButton.addEventListener('click', () => {
  userBox.classList.toggle('button__green--clicked')
  userOne.setMap(userOne.getMap() ? null : map);
  userTwo.setMap(userTwo.getMap() ? null : map);
});

let map;

function initMap() {

  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],

    {name: 'Styled Map'});

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: 51.9170588, lng: 4.484828},
    mapTypeId: 'terrain'
  });



  const lightCoordinates = [
    {lat: 51.917918, lng: 4.487792},
    {lat: 51.917421, lng: 4.488038},
    {lat: 51.917698, lng: 4.489387},
    {lat: 51.917421, lng: 4.488038},
    {lat: 51.916793, lng: 4.485435},
    {lat: 51.916160, lng: 4.485735},
    {lat: 51.916793, lng: 4.485435},
    {lat: 51.916883, lng: 4.485394},
    {lat: 51.916480, lng: 4.483603},
    {lat: 51.916883, lng: 4.485394},
    {lat: 51.917821, lng: 4.484882},
    {lat: 51.917579, lng: 4.483653},
    {lat: 51.917159, lng: 4.483827},
    {lat: 51.917122, lng: 4.483987},
    {lat: 51.918208, lng: 4.489325},
  ];

  const policeCoordinates = [
    {lat: 51.917128, lng: 4.483934},
    {lat: 51.917369, lng: 4.485102},
    {lat: 51.916793, lng: 4.485435},
    {lat: 51.917233, lng: 4.487292},
  ]

  const userCoordinatesOne = [
    {lat: 51.916223, lng: 4.483629},
    {lat: 51.916477, lng: 4.483600},
    {lat: 51.916868, lng: 4.485364},
  ]

  const userCoordinatesTwo = [
    {lat: 51.917033, lng: 4.486416},
    {lat: 51.917411, lng: 4.488046},
    {lat: 51.917045, lng: 4.488256},
    {lat: 51.916893, lng: 4.488375},
  ]

  light = new google.maps.Polyline({
    path: lightCoordinates,
    geodesic: true,
    strokeColor: '#FFFF00',
    strokeOpacity: 0.5,
    strokeWeight: 10
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  police = new google.maps.Polyline({
    path: policeCoordinates,
    geodesic: true,
    strokeColor: '#0000FF',
    strokeOpacity: 0.5,
    strokeWeight: 10
  });

  userOne = new google.maps.Polyline({
    path: userCoordinatesOne,
    geodesic: true,
    strokeColor: '#00FF00',
    strokeOpacity: 0.5,
    strokeWeight: 10
  });

  userTwo = new google.maps.Polyline({
    path: userCoordinatesTwo,
    geodesic: true,
    strokeColor: '#00FF00',
    strokeOpacity: 0.5,
    strokeWeight: 10
  });

  const mark = {
    url: 'images/marker-01.svg',
    scaledSize: new google.maps.Size(550, 50),
  };

  const markPolice = {
    url: 'images/marker-02.svg',
    scaledSize: new google.maps.Size(550, 50),
  };

  google.maps.event.addListener(light, "click", function(event) {
    if (marker) {
      marker.setMap(null);
    }
    marker = new google.maps.Marker({
      position: event.latLng,
      icon: mark,
      map: map
    });
  });

  google.maps.event.addListener(police, "click", function(event) {
    if (marker) {
      marker.setMap(null);
    }
    marker = new google.maps.Marker({
      position: event.latLng,
      icon: markPolice,
      map: map
    });
  });

  google.maps.event.addListener(userOne, "click", function(event) {
    if (marker) {
      marker.setMap(null);
    }
    marker = new google.maps.Marker({
      position: event.latLng,
      icon: mark,
      map: map
    });
  });

  google.maps.event.addListener(userTwo, "click", function(event) {
    if (marker) {
      marker.setMap(null);
    }
    marker = new google.maps.Marker({
      position: event.latLng,
      icon: mark,
      map: map
    });
  });

  light.setMap(map);

}
