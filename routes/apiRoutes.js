const router = require("express").Router();
// const auth = require("../middleware/api");
var db = require("../models");
// const index = require("index.js")
// const server = require("../server.js")

router.get("/posts", function (req, res) {
  var query = {};
  if (req.query.user) {
    query.UserId = req.query.user;
  }
});



// POST route for saving a new post
router.post("/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
});
module.exports = router;



//PUT route for updating user profile email
router.put("/api/update/email", function (req, res) {
  var condition = req.body;//.usrProfileEmailUpdate;

  db.User.update(req.body)
    .then(function (dbUser) {
      res.json(dbUser)
    })
});











  // console.log("Api Route condition" + condition);

  // user.update({
    // req.parms refers to url req . body is form info
    // email: req.body.usrProfileEmailUpdate
  // }, condition, function(result) {
    // if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      // return res.status(404).end();
    // } else {
      // res.status(200).end();


