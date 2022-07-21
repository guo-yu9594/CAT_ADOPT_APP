var express = require("express");
var router = express.Router();
const request = require("request");
const cities = ["Paris", "Bordeau", "Marseille", "Lyon"];
const func = require("../src/cat");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("HEHHEHE").status(200);
});

router.get("/random", function (req, res, next) {
  func.generateCat((result) => {
    res.send(result);
  });
});

module.exports = router;
