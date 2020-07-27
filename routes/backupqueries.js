// const NodeGeocoder = require("node-geocoder");
// console.log(process.env.GEOCODE_KEY);
// const options = {
//   provider: "google",
//   httpAdapter: "https",
//   apiKey: process.env.GEOCODE_KEY, // for Mapquest, OpenCage, Google Premier
//   formatter: null, // 'gpx', 'string', ...
// };

// const geocoder = NodeGeocoder(options);

// let stateArray = [];

// db.Death.findAll({}).then((results) => {
//   console.log("these are the results " + results);
//   results.forEach((element) => {
//     if (!stateArray.includes(element.state)) {
//       stateArray.push(element.state);
//     }
//   });

//   for (let i = 0; i < stateArray.length; i++) {
//     geocoder.geocode(stateArray[i], function (err, data) {
//       if (err) throw err;
//       // console.log(JSON.stringify(data))
//       console.log(
//         "longitude " +
//           JSON.stringify(data[0].longitude) +
//           "\n" +
//           "latitude " +
//           JSON.stringify(data[0].latitude)
//       );
//       db.Death.update(
//         { lat: data[0].latitude, long: data[0].longitude },
//         {
//           where: {
//             state: stateArray[i],
//           },
//         }
//       );
//     });
//   }
// });
