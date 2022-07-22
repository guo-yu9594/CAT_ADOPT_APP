var express = require("express");
var router = express.Router();
const request = require("request");
const cities = ["Paris", "Bordeau", "Marseille", "Lyon"];
const func = require("../src/cat");
func.catSpawning(10);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("HEHHEHE").status(200);
});

router.get("/random", function (req, res, next) {
  func.generateCat(0, (result) => {
    res.send(result);
  });
});

router.get("/list", function (req, res, next) {
  func.listCat((result) => {
    res.send(result);
  });
});

router.delete("/delete/:id", function (req, res, next) {
  const id = req.params.id;
  func.deleteCat(id, (result) => {
    res.send(result);
  });
});

module.exports = router;
