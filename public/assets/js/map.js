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
    circle: {
      icon: iconBase + "parking_lot_maps.png",
    },
    post: {
      icon: iconBase + "library_maps.png",
    }
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var markerArray = [];
  //testing
  // console.log("markers " + markerArray);
  // console.log("states " + states);
  //get the data from database
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
      new google.maps.Marker({
        position: new google.maps.LatLng(states[i].lat, states[i].long),
        title: "Click to zoom",
        map: map,
        // draggable: true,
        // animation: google.maps.Animation.DROP,
        icon: icons.circle,
      });
    }

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
  });

  var storyMarkerArray = [];
  $.get("/api/posts").then((response) => {
    console.log("these are the response", response);
    // push element in

    for (let i = 0; i < response.length; i++) {
      // const temp = new google.maps.LatLng(response[i].lat, response[i].long);
      // storyMarkerArray.push(
      console.log("parsed ", parseInt([i].lat));
      console.log("not parsed ", response[i].long);
      new google.maps.Marker({
        position: new google.maps.LatLng(response[i].lat, response[i].long),
        title: "Click to zoom",
        map: map,
        // draggable: true,
        // animation: google.maps.Animation.DROP,
        icon: icons.post,
      });
      // );
    }

    console.log(JSON.stringify(response));
  });
}
