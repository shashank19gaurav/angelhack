function initMap() {
  // Bhopal Coordinates - 23.2599° N, 77.4126
  var myLatlng = new google.maps.LatLng(23.0488204, 82.207838);

  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById("map"),mapOptions);

  //shashankstart
  var coordinates = [
      {lat: 23.1993477, lng: 77.2658056},
      {lat: 22.1993477, lng: 77.2658056},
      {lat: 25.1993477, lng: 77.2658056},
      {lat: 26.1993477, lng: 77.2658056},
      {lat: 21.1993477, lng: 77.2658056},
      {lat: 22.1993477, lng: 73.2658056},
  ];
  var marker = [];
  console.log("Adding "+ coordinates.length + " markers.");
  for (var i=0; i<coordinates.length; i++) {
    marker[i] = new google.maps.Marker({
          position: coordinates[i],
          map: map,
          title: 'Bangalore'
    });

    marker[i].addListener('click', function() {
      //Clicked
      console.log("Marker "+  i +" Clicked");
      //map.setCenter(marker[i].getPosition());
    });
  }
  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  
}