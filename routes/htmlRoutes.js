const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");
var db = require("../models");
const { getMaxListeners } = require("process");

// user authorized views - they all use the "auth" middleware
router.get("/", auth, (req, res) => res.render("dashboard"));

router.get("/user/page2", auth, (req, res) => {

  res.render("page2");
});

// router.get("/user/profile", auth, (req, res) => res.render("profile"));

//Testing for Profile Rendering//////////////////////////////////////////
router.get("/user/profile/", auth, (req, res) => {
// console.log("back end id " + req.params.id);
  console.log("*********look here**********" );
db.User.findOne({
    attributes: ["email", "city", "state"],
    where:{
    email: data.email
    }
  }).then(function (dbUser) {

  
  //get the data from the database, then feed it into the call to render
  res.render("profile", {
    email: dbUser.email,  
    city: dbUser.city,
    state: dbUser.state,

                      });
});
});

///////End Testing//////////////////////////////////////////////////

// login and register forms view
router.get("/user/login", (req, res) => res.render("login"));
router.get("/user/register", (req, res) => res.render("register"));

module.exports = router;