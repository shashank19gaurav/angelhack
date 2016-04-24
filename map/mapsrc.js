var currentSource = null;
var currentSourceCoord = null;
var currentDestination = null;
var currentDestinationCoord = null;
var finpath = null;
var pathSourceDestination;
var map = null;
var marker = [];

function initalize() {
  var myLatlng = new google.maps.LatLng(23.0488204, 82.207838); 
  var mapOptions = {
    zoom: 6,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"),mapOptions);
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();
  
  //HACK since google map does not allows two path on same directions renderer
  directionsDisplayPermanent = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "red"
    }
  });
}

function setTargetButton() {
   //set target button
  document.getElementById('settarget').addEventListener("click", function(){
  var num=1;
  $.ajax({            
      url: "http://hack.mitportals.in/api.php?cid=1",
      success: function(result){
          finpath =result;
        }
      }).done(function(){
        console.log("FIN PATH"+ JSON.stringify(finpath));
      });
      console.log("hellp");
      // console.log(finpath.data[0].area);
    });
}

function setMarkers(apiNodes) {
  console.log("Adding "+ apiNodes.length + " markers.");

    for (var i=0; i<apiNodes.length; i++) {
    marker = new google.maps.Marker({
          position: apiNodes[i].coord,
          map: map,
          title: apiNodes[i].name
    });
    marker.set('id', apiNodes[i].uniqueId);

        // Click listener
    // google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //     return function() {
    //         //infoWindow.setContent(infoWindowContent[i][0]);
    //         //
    //         //
    //         if(currentSource=="") {
    //           $('#source').text(marker.title);
    //           currentSource = marker.id;
    //           currentSourceCoord = marker.position;
    //           marker.setIcon("https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png");
    //           console.log("Source Selected as "+ marker.title + " with coordinates " + JSON.stringify(marker.position));  
    //         } else {
    //           if(marker.id==currentSource) {
    //             console.log("Source can not be same as the destination");
    //           } else {
    //             currentDestination = marker.id;
    //             currentDestinationCoord = marker.position;
    //             $('#destination').text(marker.title);
    //             //marker.setIcon("https://cdn3.iconfinder.com/data/icons/location-set/50/location5-128.png");
    //             console.log("Source is already selected with unique id :"+currentSource);
    //             console.log("Updating destination :"+marker.title);

    //             directionsDisplayPermanent.setDirections({routes: []});

                

    //            routeboxer = new RouteBoxer();
    //            var distance = 50; // km

    //            function getRouterBox(){
    //               return routeboxer;
    //            }

    //             function searchBounds(bound) {
    //              for (var i = 0; i < bound; i++) {
    //                (function(i) {
    //                  setTimeout(function() {

    //                    // Perform search on the bound and save the result
    //                    performSearch(bound[i]);

    //                    //If the last box
    //                    if ((bound.length - 1) === i) {
    //                      addAllMarkers(bound);
    //                    }
    //                  }, 400 * i);
    //                }(i));
    //              }
    //            }

    //             function performSearch(bound) {
    //              var request = {
    //                bounds: bound,
    //                keyword: 'bars'
    //              };
    //              currentBound = bound;
    //              service.radarSearch(request, callback);
    //            }

    //             function callback(results, status) {
    //                if (status !== google.maps.places.PlacesServiceStatus.OK) {
    //                  console.error(status);
    //                  return;
    //                }

    //                for (var i = 0, result; result = results[i]; i++) {
    //                  // Go through each result from the search and if the place exist already in our list of places then done push it in to the array
    //                  if (!placeExists(result.id)) {
    //                    allPlaces.push(result);
    //                  }
    //                }
    //              }
              
    //             // bound.contains(new google.maps.LatLng(allPlaces[j].geometry.location.lat(), allPlaces[j].geometry.location.lng()));

    //             //Dummy Waypoints
    //             var waypts = [];

    //             stop = new google.maps.LatLng(25.1993477, 72.26580560000002)
    //             waypts.push({
    //                 location: stop,
    //                 stopover: true
    //             });
    //             pathSourceDestination = {
    //               origin : currentSourceCoord,
    //               destination : currentDestinationCoord,
    //               travelMode : google.maps.TravelMode.DRIVING
    //             };
               
    //             //Empty the original path 
    //             directionsDisplayPermanent.setDirections({routes: []});
    //             console.log("Path from Soruce to destianation sets");

    //             directionsService.route(pathSourceDestination, function(response, status) {
    //               if (status == google.maps.DirectionsStatus.OK) {
    //                 directionsDisplayPermanent.setOptions({ preserveViewport: true });
    //                 directionsDisplayPermanent.setOptions({ suppressMarkers: true });
    //                 directionsDisplayPermanent.setDirections(response);


    //                 routeboxer = new RouteBoxer();
    //                 var path = response.routes[0].overview_path;
    //                 console.log("Checking for distance :" + path);
    //                 var bounds = routeboxer.box(path, 2);

    //                 //searchBounds(bounds);
    //               }

    //               });


    //           }
    //         }
            
    //     }
    //   })(marker, i));

    // //Hover Listener
    // google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
    //       return function() {

    //           $('#intermediate').text(marker.title);
    //           //infoWindow.setContent(infoWindowContent[i][0]);
    //           if(currentSource!=''){
    //             console.log("Marker Postiion :", JSON.stringify(marker.position));
    //             //Source is selected 
    //             //Get the source and the destinationcoordinates
    //             //Call the direction map
    //             var start = currentSourceCoord;
    //             var end = marker.position;            
    //             directionsDisplay.setMap(map); // map should be already initialized.
    //             directionsDisplayPermanent.setMap(map); // map should be already initialized.

    //             var request = {
    //                 origin : start,
    //                 destination : end,
    //                 travelMode : google.maps.TravelMode.DRIVING
    //             };
           

    //             directionsService.route(request, function(response, status) {
    //                 if (status == google.maps.DirectionsStatus.OK) {
    //                     directionsDisplay.setOptions({ preserveViewport: true });
    //                     directionsDisplay.setOptions({ suppressMarkers: true });
    //                     directionsDisplay.setDirections(response);
    //                 }
    //             });

    //             if (typeof pathSourceDestination !== 'undefined') {
    //                 console.log("Permanent Coordinates :"+ JSON.stringify(pathSourceDestination));
    //                 directionsService.route(pathSourceDestination, function(response, status) {
    //                 if (status == google.maps.DirectionsStatus.OK) {
    //                       directionsDisplayPermanent.setOptions({ preserveViewport: true });
    //                       directionsDisplayPermanent.setOptions({ suppressMarkers: true });
    //                       directionsDisplayPermanent.setDirections(response);
    //                   }
    //                 });
    //             }

              

    //           }
              
    //       }
    //   })(marker, i));

    // google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
    //       return function() {
    //           //infoWindow.setContent(infoWindowContent[i][0]);
    //           if(currentSource!=''){
    //               directionsDisplay.setDirections({routes: []});
    //           }
              
    //       }
    //   })(marker, i));


      //Do all the cool stuffs here now
    }
}

function initMap() {
  $(document).ready(function(){
    console.log("Fetching the location from API");
    $.ajax({
        url: "http://hack.mitportals.in/api.php", 
        success: function(result){
          console.log(result.data.length);
          var city;
          var apiNodes = [];
          for (var i=0; i<result.data.length; i++) {
            city = {
              name: result.data[i].cname,
              coord: {
                lng: parseFloat(result.data[i].long),
                lat: parseFloat(result.data[i].lat)
              },
              uniqueId: result.data[i].cid
            }

            apiNodes.push(city);
            console.log(result.data[i].long + " --  "+ JSON.stringify(city));
          }
          console.log("Calling Update Map" + setMarkers(apiNodes));
        }
    });
  });
}