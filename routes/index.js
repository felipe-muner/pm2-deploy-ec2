var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({ title: "pm2 deploy on aws-ec2 test at 15:03" });
});

module.exports = router;
