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
