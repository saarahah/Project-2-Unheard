const router = require("express").Router();
var db = require("../models");
router.get("/posts", function (req, res) {
  db.Post.findAll().then(function (dbPost) {
    //send back all db posts as json
    //send posts out
  });
});

// POST route for saving a new post
router.post("/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
});

//PUT route for updating user profile email
router.put("/api/update/email", function (req, res) {
  var condition = req.body; //.usrProfileEmailUpdate;

  db.User.update(req.body).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.get("/deaths", function (req, res) {
  //query deaths table for death data
  db.Death.findAll({
    attributes: ["state", "lat", "long", "deaths"],
    where: {
      year: 2019
    }
  }).then(function (results) {
    res.json(results);
  });
});
// for (let index = 0; index < stateArray.length; index++) {
//   db.Death.update({lat: })
// }

module.exports = router;
