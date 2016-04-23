function initMap() {
  // Bhopal Coordinates - 23.2599° N, 77.4126
  var myLatlng = new google.maps.LatLng(23.0488204, 82.207838);

  var currentSource = '';
  var currentDestination = '';

  var mapOptions = {
    zoom: 6,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"),mapOptions);

  //Coordinates data
  
  var nodes = [{
        "coord": {
          "lat": 23.1993477,
          "lng": 77.2658056
        },
        "name": "ABC",
        "uniqueId": "dassad"
      }, {
        "coord": {
          "lat": 24.1993477,
          "lng": 73.2658056
        },
        "name": "CSD",
        "uniqueId": "REED"
      }, {
        "coord": {
          "lat": 25.1993477,
          "lng": 72.2658056
        },
        "name": "FAKLD",
        "uniqueId": "kjfwoej"
      }, {
        "coord": {
          "lat": 27.1993477,
          "lng": 76.2658056
        },
        "name": "dkf",
        "uniqueId": "djaksdas"
      }
    ];

  var marker = [];
  console.log("Adding "+ nodes.length + " markers.");
  for (var i=0; i<nodes.length; i++) {
    marker = new google.maps.Marker({
          position: nodes[i].coord,
          map: map,
          title: nodes[i].name
    });

    //TODO:: Assign unique identifier to each marker
    marker.set('id', nodes[i].uniqueId);
    // Allow each marker to have an info window    
    // 
    // Click listener
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            //infoWindow.setContent(infoWindowContent[i][0]);
            if(currentSource=="") {
              currentSource = marker.id;
              console.log("Source Selected as "+ marker.title);  
            } else {
              if(marker.id==currentSource) {
                console.log("Source can not be same as the destination");
              } else {
                currentDestination = marker.id;
                console.log("Source is already selected with unique id :"+currentSource);
                console.log("Updating destination :"+marker.title);
              }
            }
            
        }
    })(marker, i));

    //Hover Listener
    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
            //infoWindow.setContent(infoWindowContent[i][0]);
            if(currentSource!=''){
              console.log("Marker Postiion :", JSON.stringify(marker.position));
              //Source is selected 
              //Get the source and the destinationcoordinates
              //Call the direction map
              var start = new google.maps.LatLng(28.694004, 77.110291);
              var end = marker.position;
              var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
                directionsDisplay.setMap(map); // map should be already initialized.

                var request = {
                    origin : start,
                    destination : end,
                    travelMode : google.maps.TravelMode.DRIVING
                };
              var directionsService = new google.maps.DirectionsService(); 
              directionsService.route(request, function(response, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                      directionsDisplay.setDirections(response);
                  }
              });


            }
            
        }
    })(marker, i));
  } 
}