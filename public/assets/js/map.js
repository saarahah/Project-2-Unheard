$.get("/api/deaths", (deathData)=> {
  console.log(deathData);
})


function initMap() {
  var usaLatlng = new google.maps.LatLng(39.381266, -97.922211);
  var mapOptions = {
    zoom: 4,
    center: usaLatlng,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: usaLatlng,
  });

  var statesArray = [
    {
      name: "wisconsin",
      lat: 44.5,
      lng: -89.5,
    },
    {
      name: "west virginia",
      lat: 39.0,
      lng: -80.5,
    },
    {
      name: "vermont",
      lat: 44.0,
      lng: -72.699997,
    },
    {
      name: "texas",
      lat: 31.0,
      lng: -100.0,
    },
    {
      name: "south dakota",
      lat: 44.5,
      lng: -100.0,
    },
    {
      name: "rhode island",
      lat: 41.700001,
      lng: -71.5,
    },
    {
      name: "oregon",
      lat: 44.0,
      lng: -120.5,
    },
    {
      name: "new york",
      lat: 43.0,
      lng: -75.0,
    },
    {
      name: "new hampshire",
      lat: 44.0,
      lng: -71.5,
    },
    {
      name: "nebraska",
      lat: 41.5,
      lng: -100.0,
    },
    {
      name: "kansas",
      lat: 38.5,
      lng: -98.0,
    },
    {
      name: "mississippi",
      lat: 33.0,
      lng: -90.0,
    },
    {
      name: "illinois",
      lat: 40.0,
      lng: -89.0,
    },
    {
      name: "delaware",
      lat: 39.0,
      lng: -75.5,
    },
    {
      name: "connecticut",
      lat: 41.599998,
      lng: -72.699997,
    },
    {
      name: "arkansas",
      lat: 34.799999,
      lng: -92.199997,
    },
    {
      name: "indiana",
      lat: 40.273502,
      lng: -86.126976,
    },
    {
      name: "missouri",
      lat: 38.573936,
      lng: -92.60376,
    },
    {
      name: "florida",
      lat: 27.994402,
      lng: -81.760254,
    },
    {
      name: "nevada",
      lat: 39.876019,
      lng: -117.224121,
    },
    {
      name: "maine",
      lat: 45.367584,
      lng: -68.972168,
    },
    {
      name: "michigan",
      lat: 44.182205,
      lng: -84.506836,
    },
    {
      name: "georgia",
      lat: 33.247875,
      lng: -83.441162,
    },
    {
      name: "hawaii",
      lat: 19.741755,
      lng: -155.844437,
    },
    {
      name: "alaska",
      lat: 66.160507,
      lng: -153.369141,
    },
    {
      name: "tennessee",
      lat: 35.860119,
      lng: -86.660156,
    },
    {
      name: "virginia",
      lat: 37.926868,
      lng: -78.024902,
    },
    {
      name: "new jersey",
      lat: 39.833851,
      lng: -74.871826,
    },
    {
      name: "kentucky",
      lat: 37.839333,
      lng: -84.27002,
    },
    {
      name: "north dakota",
      lat: 47.650589,
      lng: -100.437012,
    },
    {
      name: "minnesota",
      lat: 46.39241,
      lng: -94.63623,
    },
    {
      name: "oklahoma",
      lat: 36.084621,
      lng: -96.921387,
    },
    {
      name: "montana",
      lat: 46.96526,
      lng: -109.533691,
    },
    {
      name: "washington state",
      lat: 47.751076,
      lng: -120.740135,
    },
    {
      name: "utah",
      lat: 39.41922,
      lng: -111.950684,
    },
    {
      name: "colorado",
      lat: 39.113014,
      lng: -105.358887,
    },
    {
      name: "ohio",
      lat: 40.367474,
      lng: -82.996216,
    },
    {
      name: "alabama",
      lat: 32.31823,
      lng: -86.902298,
    },
    {
      name: "iowa",
      lat: 42.032974,
      lng: -93.581543,
    },
    {
      name: "new mexico",
      lat: 34.307144,
      lng: -106.018066,
    },
    {
      name: "south carolina",
      lat: 33.836082,
      lng: -81.163727,
    },
    {
      name: "pennsylvania",
      lat: 41.203323,
      lng: -77.194527,
    },
    {
      name: "arizona",
      lat: 34.048927,
      lng: -111.093735,
    },
    {
      name: "maryland",
      lat: 39.045753,
      lng: -76.641273,
    },
    {
      name: "massachusetts",
      lat: 42.407211,
      lng: -71.382439,
    },
    {
      name: "california",
      lat: 36.778259,
      lng: -119.417931,
    },
    {
      name: "idaho",
      lat: 44.068203,
      lng: -114.742043,
    },
    {
      name: "wyoming",
      lat: 43.07597,
      lng: -107.290283,
    },
    {
      name: "north carolina",
      lat: 35.782169,
      lng: -80.793457,
    },
    {
      name: "louisiana",
      lat: 30.39183,
      lng: -92.329102,
    },
  ];

  var markerArray = [];

  for (let i = 0; i < statesArray.length; i++) {
    const temp = new google.maps.LatLng(statesArray[i].lat, statesArray[1].lng);
    markerArray.push(
      new google.maps.Marker({
        position: new google.maps.LatLng(
          statesArray[i].lat,
          statesArray[i].lng
        ),
        title: "Click to zoom",
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: circle,
      })
    );
    var circle = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "red",
      fillOpacity: 0.2,
      scale: 30,
      strokeColor: "red",
      strokeWeight: 0,
    };
  }
}
