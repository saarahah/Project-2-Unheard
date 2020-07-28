//globals
let states = [];
let deathScale = 0;
let response = [];
var map, infoWindow;
var deathColor;

function initMap() {
  var usaLatlng = new google.maps.LatLng(39.381266, -97.922211);
  map = new google.maps.Map(document.getElementById("map"),{
    center: usaLatlng,
    zoom: 4
  });
  
  infoWindow = new google.maps.InfoWindow;

  // Below states if the app was able to grab User's GeoLoc then display else display the error function placed at the end of the script aka handleLocationError. 

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var marker = new google.maps.Marker({
        position: pos,
        map: map
       
      });
      //info below is for marker placement and positioning of User's location on map// 
      infoWindow.setPosition(pos);
      //(The following logged out code is to place a string of info inside the infowindow) infoWindow.setContent(marker);
      //(The following logged out code is to place a the actual infowindow inside the map aka text bubble) infoWindow.open(map);
      marker.setMap(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
     [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#242f3e",
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#746855",
          }
        ]
      },

      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {

            color: "#FFFFFF",
          },
        ],
      },
    ],
  };

            color: "#17263c",
          }
        ]
      }
    ];
  

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
    var infoWindowarray = [];
    for (let i = 0; i < response.length; i++) {
      // const temp = new google.maps.LatLng(response[i].lat, response[i].long);
      // storyMarkerArray.push(
      // console.log("parsed ", parseInt([i].lat));
      //  console.log("not parsed ", response[i].long);

      var contentString = JSON.stringify(response[i].body);

      infoWindowarray[i] = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: "150px",
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
    // console.log("here is the title", response[0].title);
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
      if (deaths < 800) {
        deathScale = 15;
        deathColor = "blue";
      } else if (deaths > 800 && deaths < 1500) {
        deathScale = 20;
        deathColor = "green";
      } else if (deaths > 1500 && deaths < 20000) {
        deathScale = 25;
        deathColor = "yellow";
      } else if (deaths > 20000 && deaths < 30000) {
        deathScale = 30;
        deathColor = "orange";
      } else if (deaths > 30000 && deaths < 40000) {
        deathScale = 40;
        deathColor = "red";
      } else if (deaths > 40000 && deaths < 70000) {
        deathScale = 50;
        deathColor = "purple";
      }

      // console.log("this is death scale " + deathScale);
      var circle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: deathColor,
        fillOpacity: 0.2,
        scale: deathScale,
        strokeColor: deathColor,
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

