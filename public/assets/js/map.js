//globals
let states = [];
let deathScale = 0;
let response = [];

function initMap() {
  var usaLatlng = new google.maps.LatLng(39.381266, -97.922211);
  var mapOptions = {
    zoom: 4,
    center: usaLatlng,
  };
  var iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  var icons = {
    post: {
      icon: iconBase + "library_maps.png",
    },
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //testing
  // console.log("markers " + markerArray);
  // console.log("states " + states);
  //get the data from database
  // var storyMarkerArray = [];
  $.get("/api/posts").then((response) => {
    console.log("these are the response", response);
    // push element in

    for (let i = 0; i < response.length; i++) {
      // const temp = new google.maps.LatLng(response[i].lat, response[i].long);
      // storyMarkerArray.push(
      // console.log("parsed ", parseInt([i].lat));
      //  console.log("not parsed ", response[i].long);

      var contentString = JSON.stringify(response[0].body);

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      console.log("this is the cstring", contentString);

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(response[i].lat, response[i].long),
        // title: JSON.stringify(response[0].title),
        // snippet: response[0].body,
        map: map,
        zIndex: 600,
        // draggable: true,
        // animation: google.maps.Animation.DROP,
        icon: icons.post.icon,
      });
      marker.addListener("click", function () {
        infowindow.open(map, marker);
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
        title: "Click to zoom",
        map: map,
        // draggable: true,
        // animation: google.maps.Animation.DROP,
        icon: circle,
      });
    }
  });
}
