//globals
let states = [];
let deathScale = 0;
let response = [];
var map, infoWindow;

function initMap() {
  var usaLatlng = new google.maps.LatLng(39.381266, -97.922211);
  map = new google.maps.Map(document.getElementById("map"),{
    center: usaLatlng,
    zoom: 4
  });
  
  //  {
  //   zoom: 4,
  //   center: usaLatlng,
  // };

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  // var iconBase =
  //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  var icons = {
    post: {
      icon: "https://storage.googleapis.com/support-kms-prod/SNP_2752068_en_v0",
    },
  };

  //testing
  // console.log("markers " + markerArray);
  // console.log("states " + states);
  //get the data from database
  // var storyMarkerArray = [];
  $.get("/api/posts").then((response) => {
    console.log("these are the response", response);
    // push element in
    var infoWindowarray=[]
    for (let i = 0; i < response.length; i++) {
      // const temp = new google.maps.LatLng(response[i].lat, response[i].long);
      // storyMarkerArray.push(
      // console.log("parsed ", parseInt([i].lat));
      //  console.log("not parsed ", response[i].long);

      var contentString = JSON.stringify(response[i].body);

      infoWindowarray[i] = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: "150px"
        
      });

      console.log("this is the cstring", contentString);

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(response[i].lat, response[i].long),
        // title: JSON.stringify(response[0].title),
        // snippet: response[0].body,
        map: map,
        zIndex: 600,
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: icons.post.icon,
      });
      marker.addListener("click", function () {

        infoWindowarray[i].open(map, this);
      });
    }
    console.log("here is the title", response[0].title);
  });

  $.get("/api/deaths", (deathData) => {
    console.log(deathData);
    //push element in
    deathData.forEach((element) => {
      element.name = element.state;
      states.push(element);
      // console.log(JSON.stringify(element));
    });

    for (let i = 0; i < states.length; i++) {
      // markerArray.push(

      let deaths = states[i].deaths;
      // console.log("this is deaths " + deaths);
      if (deaths < 100) {
        deathScale = 1;
      } else if (deaths > 100 && deaths < 500) {
        deathScale = 10;
      } else if (deaths > 500 && deaths < 2000) {
        deathScale = 20;
      } else if (deaths > 2000 && deaths < 20000) {
        deathScale = 40;
      }

      // console.log("this is death scale " + deathScale);
      var circle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "red",
        fillOpacity: 0.2,
        scale: deathScale,
        strokeColor: "red",
        strokeWeight: 0,
      };
      // }
      new google.maps.Marker({
        position: new google.maps.LatLng(states[i].lat, states[i].long),
        
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: circle,
      });
    }
  });
}


//function referencing user geoLoc Err//
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

