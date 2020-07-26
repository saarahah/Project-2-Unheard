const router = require("express").Router();
// const auth = require("../middleware/api");
var db = require("../models");
// const index = require("index.js")
// const server = require("../server.js")

//The route matches this route /api/posts
router.get("/posts", function (req, res) {
  var query = {};
  if (req.query.user) {
    query.UserId = req.query.user;
  }
});



// POST route for saving a new post
//The route matches this route /api/posts
router.post("/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
});




//PUT route for updating user profile email
//The route matches this route /api/update/email
router.put("/update/email/:id", function (req, res) {
  console.log("req.body.email is " + req.body.email);
  // should console log the id of the logged in user
  console.log("req.params.id" + req.params.id);
  console.log("user is - " + userId);
  db.User.update({
    email: req.body.email
  }, {
    where: {
      id: req.param.id
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

//PUT route for updating user profile password
//The route matches this route /api/update/password
router.put("/update/password/", function (req, res) {
  // router.put("/update/password/:id", function (req, res) {
  console.log("req.body.password" + req.body.password);
  // should console log the id of the logged in user
  console.log("req.params.id" + req.params.id);
  db.User.update({
    password: req.body.password
  }, {
    where: {
      id: 1
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

//PUT route for updating user profile city
//The route matches this route /api/update/city
router.put("/update/city/", function (req, res) {
  // router.put("/update/password/:id", function (req, res) {
  console.log(req.body.city);
  // should console log the id of the logged in user
  console.log(req.params.id);
  db.User.update({
    city: req.body.city
  }, {
    where: {
      id: 3
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

//PUT route for updating user profile state
//The route matches this route /api/update/state
router.put("/update/state/", function (req, res) {
  // router.put("/update/password/:id", function (req, res) {
  console.log(req.body.city);
  // should console log the id of the logged in user
  console.log(req.params.id);
  db.User.update({
    state: req.body.state
  }, {
    where: {
      id: 3
    }
  })
    .then(function (dbUser) {
      res.json(dbUser);
    });
});

// Route for getting Current Users info to be displayed on their Profile Page
router.get("api/user/info", function(req, res) {
  // gets from db
  User.all(function(data) {
    // turns res into obj
    var hbsObject = {
      User: data
    };
    console.log(hbsObject);
    // sending obj to handlebars template
    res.render("index", hbsObject);
  });
});

module.exports = router;