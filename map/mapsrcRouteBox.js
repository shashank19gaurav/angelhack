var map = null;
var boxpolys = null;
var directions = null;
var routeBoxer = null;
var distance = null; // km
var apiNodes = [];
var currentSource = null;
var currentDestination = null;
var currentSourceCoord = null;
var currentDestinationCoord = null;
var distance = null;
var contentString = "Random";
var infowindow = "";

var intermediatePoints = [];
var intermediatePointsId = [];

var fixPath = 0;

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

var freezeNodes = function() {
  fixPath = 1;
}

function calculateDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}


function initialize() {
  // Default the map view to the continental U.S.
  var mapOptions = {
    center: new google.maps.LatLng(23.0488204, 82.207838),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 5,
    styles: [
        {
        "featureType": "water",
        "stylers": [
            {
                "saturation": 43
            },
            {
                "lightness": -11
            },
            {
                "hue": "#0088ff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "lightness": 54
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ece2d9"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ccdca1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#767676"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
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
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b8cb93"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    }
]

  };
  
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  directionService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({ map: map });      
  directionsDisplayPermanent = new google.maps.DirectionsRenderer({ 
    map: map,
    polylineOptions: {
        strokeColor: "red"
      }
     });      
    getMarkers();
    infowindow = new google.maps.InfoWindow({
    content: contentString
  });
}

var getMarkers = function() {
    console.log("Fetching the location from API");
    $.ajax({
        url: "http://hack.mitportals.in/api.php", 
        success: function(result){
          console.log(result.data.length);
          var city;
          apiNodes = [];
          for (var i=0; i<result.data.length; i++) {
            city = {
              name: result.data[i].cname,
              coord: {
                lng: parseFloat(result.data[i].lng),
                lat: parseFloat(result.data[i].lat)
              },
              uniqueId: result.data[i].cid,
              descrip:result.data[i].descrip
            }

            apiNodes.push(city);
            console.log(result.data[i].long + " --  "+ JSON.stringify(city));
          }
        }
    }).done(function() {
      console.log("Calling Update Map" + setMarkers());
    });
}

function setMarkers() {
  console.log("Adding "+ apiNodes.length + " markers.");
    for (var i=0; i<apiNodes.length; i++) {
    marker = new google.maps.Marker({
          position: apiNodes[i].coord,
          map: map,
          title: apiNodes[i].name,
          description : apiNodes[i].descrip
    });
    marker.set('id', apiNodes[i].uniqueId);

    // Click listener
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          // approxDistance = calculateDistance();
          
          
           if(!currentSource) {
              $('#source').text(marker.title);
              $('#sourcedescription').text(marker.description);
              currentSource = marker.id;
              currentSourceCoord = marker.position;
              marker.setIcon("https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png");
              console.log("Source Selected as "+ marker.title + " with coordinates " + JSON.stringify(marker.position));  


            } 
           else {
              if(marker.id==currentSource) {
                console.log("Source can not be same as the destination");
              } else if(typeof pathSourceDestination !== 'undefined') {
                  //Source and destination are already selected
                  //
                  intermediatePoints.push(marker);
                  console.log("Beech ka path"+ " length of waypoints :"+intermediatePoints.length);
                   directionsDisplayPermanent.setDirections({routes: []});
                   var waypts = [];
                    if(intermediatePoints.length!=0) {
                      //Dummy Waypoints
                      var temp;
                      for(var i=0; i<intermediatePoints.length; i++) {

                        // currentSourceObj = JSON.parse(JSON.stringify(currentSourceCoord));
                        // currentDestinationObj = JSON.parse(JSON.stringify(marker.position));
                        //console.log(JSON.stringify(intermediatePoints[i]));
                        temp = JSON.parse(JSON.stringify(intermediatePoints[i].position));
                        console.log("Marker ka titel"+ marker.title +"Coordinates Testing, lat : "+temp.lat + " long : "+ temp.lng);
                        stop = new google.maps.LatLng(temp.lat, temp.lng)
                        waypts.push({
                            location: stop,
                            stopover: true
                        });  
                      }
                    }

                    pathSourceDestination = {
                      origin : currentSourceCoord,
                      destination : currentDestinationCoord,
                      travelMode : google.maps.TravelMode.DRIVING,
                      waypoints: waypts,
                    };
                    console.log("Waypoints"+ waypts);

                    directionsDisplayPermanent.setDirections({routes: []});
                    console.log("Path from Soruce to destianation sets");

                    directionService.route(pathSourceDestination, function(response, status) {
                      if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplayPermanent.setOptions({ preserveViewport: true });
                        directionsDisplayPermanent.setOptions({ suppressMarkers: true });
                        directionsDisplayPermanent.setDirections(response);
                      }
                    });

              }else {
                currentDestination = marker.id;
                currentDestinationCoord = marker.position;

                console.log("Current Approx distance "+ approxDistance);
                $('#destination').text(marker.title);
                $('#destinationdescription').text(marker.description);
                //marker.setIcon("https://cdn3.iconfinder.com/data/icons/location-set/50/location5-128.png");
                console.log("Source is already selected with unique id :"+currentSource);
                console.log("Updating destination :"+marker.title);

               directionsDisplayPermanent.setDirections({routes: []});
            

                pathSourceDestination = {
                  origin : currentSourceCoord,
                  destination : currentDestinationCoord,
                  travelMode : google.maps.TravelMode.DRIVING
                };
               
                //Empty the original path 
                directionsDisplayPermanent.setDirections({routes: []});
                console.log("Path from Soruce to destianation sets");

                // directionService.route(pathSourceDestination, function(response, status) {
                //   if (status == google.maps.DirectionsStatus.OK) {
                //     directionsDisplayPermanent.setOptions({ preserveViewport: true });
                //     directionsDisplayPermanent.setOptions({ suppressMarkers: true });
                //     directionsDisplayPermanent.setDirections(response);
                //   }
                // });

                route(pathSourceDestination);

              }
            }
        }
      })(marker, i));

    //Hover Listener
    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
          return function() {
              $('#intermediate').text(marker.title);
              $('#intermediatedescription').text(marker.description);
              console.log($('#intermediatedescription'));
              //infoWindow.setContent(infoWindowContent[i][0]);
              if(!(!currentSource)){
                console.log("Marker Postiion :", JSON.stringify(marker.position));
                //Source is selected 
                //Get the source and the destinationcoordinates
                //Call the direction map
                console.log("Current source "+currentSourceCoord);
                var start = currentSourceCoord;
                var end = marker.position;            
                directionsRenderer.setMap(map); // map should be already initialized.
                directionsDisplayPermanent.setMap(map); // map should be already initialized.

                var request = {
                    origin : start,
                    destination : end,
                    travelMode : google.maps.TravelMode.DRIVING
                };
           

                directionService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setOptions({ preserveViewport: true });
                        directionsRenderer.setOptions({ suppressMarkers: true });
                        directionsRenderer.setDirections(response);
                    }
                });

                currentSourceObj = JSON.parse(JSON.stringify(currentSourceCoord));
                currentDestinationObj = JSON.parse(JSON.stringify(marker.position));

                console.log(currentSourceObj.lat + " "+ currentSourceObj.lng +  currentDestinationObj.lat+ currentDestinationObj.lng);
                approxDistance = calculateDistance(currentSourceObj.lat, currentSourceObj.lng, currentDestinationObj.lat, currentDestinationObj.lng);
                contentString='<div id="content"><h1>'+marker.title+'</h1>'+marker.description+'<br/>Apporoximate Distance : '+approxDistance+' KM </div>';

                if (typeof pathSourceDestination !== 'undefined') {
                    console.log("Permanent Coordinates :"+ JSON.stringify(pathSourceDestination));
                    directionService.route(pathSourceDestination, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                          directionsDisplayPermanent.setOptions({ preserveViewport: true });
                          directionsDisplayPermanent.setOptions({ suppressMarkers: true });
                          directionsDisplayPermanent.setDirections(response);
                      }
                    });
                }
                infowindow.setContent(contentString);
                infowindow.open(map, marker);
              }
              
          }
      })(marker, i));

    google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
          return function() {
              //infoWindow.setContent(infoWindowContent[i][0]);
              if(currentSource!=''){
                  directionsRenderer.setDirections({routes: []});
              }
              infowindow.close();
          }
      })(marker, i));


      //Do all the cool stuffs here now
    }
}

getMarkers();

function route(request) {
  // Convert the distance to box around the route from miles to km
  distance = 2;
  routeBoxer = new RouteBoxer();
  // Make the directions request
  directionService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplayPermanent.setOptions({ preserveViewport: true });
      directionsDisplayPermanent.setOptions({ suppressMarkers: true });
      directionsDisplayPermanent.setDirections(result);
      
      // Box around the overview path of the first route
      //var path = result.routes[0].overview_path;
      //var boxes = routeBoxer.box(path, distance);
      //drawBoxes(boxes);
    } else {
      alert("Directions query failed: " + status);
    }
  });
}

// Draw the array of boxes as polylines on the map
function drawBoxes(boxes) {
  boxpolys = new Array(boxes.length);
  for (var i = 0; i < boxes.length; i++) {
    boxpolys[i] = new google.maps.Rectangle({
      bounds: boxes[i],
      fillOpacity: 0,
      strokeOpacity: 1.0,
      strokeColor: '#000000',
      strokeWeight: 1,
      map: map
    });
  }
}

// Clear boxes currently on the map
function clearBoxes() {
  if (boxpolys != null) {
    for (var i = 0; i < boxpolys.length; i++) {
      boxpolys[i].setMap(null);
    }
  }
  boxpolys = null;
}
