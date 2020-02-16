var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({ title: "deploy pm2 ec2" });
});

module.exports = router;
