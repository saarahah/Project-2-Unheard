// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models

const router = require("express").Router();

var db = require("../models");

// Routes
// =============================================================


  // GET route for getting all of the posts
  router.get("/api/dashboard", function(req, res) {
    var query = {};
    if (req.query.user) {
      query.UserId = req.query.user;
    }
  })


  // POST route for saving a new post
  router.post("/api/dashboard", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });


// router.post("/dashboard", (req, res, next) => {

//   const { email, password } = req.body;

//   // check if there are any empty fields
//   if (email === "" || password === "") {
//     return res.status(400).json({ message: "Please fill all fields" });
//   }
//   // passport Authentication using the "Local strategy" inside the "config" folder config/passport.js."
//   // passport check the email and password and returns a function passing three arguments (err, info, user)
//   passport.authenticate("local", (err, user, info) => {
//     if (err) {
//       next(err);
//     }
//     // if can't find email, or if password is incorrect, send error message (info)
//     if (!user) {
//       res.status(404).json(info);
//     }
//     // Log user
//     req.logIn(user, function (err) {
//       if (err) {
//         next(err);
//       }
//       return res.json(user);
//     });
//   })(req, res, next);
// });
  

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  module.exports = router;
