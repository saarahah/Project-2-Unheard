const router = require("express").Router();
var db = require("../models");
// const index = require("index.js")
// const server = require("../server.js")

//The route matches this route /api/posts
router.get("/posts", function (req, res) {
  db.Post.findAll().then(function (dbPost) {
   res.json(dbPost);
    //send posts out
  });
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
  console.log("req.params.id is " + req.params.id);
  console.log("MySql ID is - " + req.params.id);
  db.User.update(
    {
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(function (dbUser) {
    res.json(dbUser);
  });
});

//PUT route for updating user profile password
//The route matches this route /api/update/password
//The route matches this route /auth/update/password
router.put("/update/password/", function (req, res) {
  // router.put("/update/password/", function (req, res) {
  // router.put("/update/password/:id", function (req, res) {
  console.log("req.body.password" + req.body.password);
  // should console log the id of the logged in user
  console.log("MySql ID is " + req.params.id);
  db.User.update(
    {
      password: req.body.password,
    },
    {
      where: {
        id: 1,
      },
    }
  ).then(function (dbUser) {
    res.json(dbUser);
  });
});

//PUT route for updating user profile city
//The route matches this route /api/update/city
router.put("/update/city/:id", function (req, res) {
  // router.put("/update/password/:id", function (req, res) {
  console.log(req.body.city);
  // should console log the id of the logged in user
  console.log(req.params.id);
  db.User.update(
    {
      city: req.body.city,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(function (dbUser) {
    res.json(dbUser);
  });
});

//PUT route for updating user profile state
//The route matches this route /api/update/state
router.put("/update/state/:id", function (req, res) {
  // router.put("/update/password/:id", function (req, res) {
  console.log(req.body.city);
  // should console log the id of the logged in user
  console.log(req.params.id);
  db.User.update(
    {
      state: req.body.state,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(function (dbUser) {
    res.json(dbUser);
  });
});

// Route for getting Current Users info to be displayed on their Profile Page
router.get("/user/info/:id", function (req, res) {
  // gets from db
  console.log("id is  ******" + req.params.id);
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then(function (dbUser) {
    // res.render("profile", { user_data: dbUser });
    res.render("profile", { user_data: dbUser });

    // res.json(dbUser);
    console.log(dbUser);
  });
});

router.get("/deaths", function (req, res) {
  //query deaths table for death data
  db.Death.findAll({
    attributes: ["state", "lat", "long", "deaths"],
    where: {
      year: 2019,
    },
  }).then(function (results) {
    res.json(results);
  });
});

module.exports = router;
