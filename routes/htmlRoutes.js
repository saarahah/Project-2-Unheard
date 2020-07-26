const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");

// user authorized views - they all use the "auth" middleware
router.get("/", auth, (req, res) => res.render("dashboard"));

router.get("/user/page2", auth, (req, res) => {

  res.render("page2");
});

router.get("/user/profile", auth, (req, res) => res.render("profile"));

// login and register forms view
router.get("/user/login", (req, res) => res.render("login"));
router.get("/user/register", (req, res) => res.render("register"));

module.exports = router;
