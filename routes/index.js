var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({ title: "pm2 deploy on aws-ec2" });
});

module.exports = router;
