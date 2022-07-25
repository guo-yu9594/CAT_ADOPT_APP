var express = require("express");
var router = express.Router();
const func = require("../src/cat");
func.catSpawning(30);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("HEHHEHE").status(200);
});

router.get("/random", function (req, res, next) {
  func.generateCat(0, (result) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
  });
});

router.get("/list", function (req, res, next) {
  func.listCat((result) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
  });
});

router.get("/filter", function (req, res, next) {
  func.getFilters((result) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
  });
});

router.delete("/delete/:id", function (req, res, next) {
  const id = req.params.id;
  func.deleteCat(id, (result) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
  });
});

router.put("/update/:id", function (req, res, next) {
  const id = req.params.id;
  console.log(req.body);
  func.updateCat(id, req.body, (result) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
  });
});

router.post("/adopt/:id", function (req, res, next) {
  const id = req.params.id;
  func.adoptCat(id, (result) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
  });
});

module.exports = router;
