const request = require("request");
const cities = ["Paris", "Bordeau", "Marseille", "Lyon"];
var cats = [];
var self = {};

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function generatePicture(callback) {
  request("http://aws.random.cat/meow", { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    callback(body.file);
  });
}

function getPicture() {
  return new Promise((resolve, reject) => {
    generatePicture((res) => {
      resolve(res);
    });
  });
}

function getCity() {
  return cities[getRandomInt(cities.length - 1)];
}

async function generateCat(id, callback) {
  var picture = await getPicture();

  request("https://api.namefake.com/", { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    callback({
      id: id,
      name: body.name,
      birthdate: body.birth_data,
      race: "cat",
      city: getCity(),
      description: body.company,
      photo: picture,
      status: "À adopter",
    });
  });
}

self.generateCat = generateCat;

self.catSpawning = (n) => {
  for (var i = 0; i < n; i++) {
    generateCat(i, (res) => {
      cats.push(res);
    });
  }
}

self.listCat = (callback) => {
  console.log(cats);
  callback(cats);
}

self.deleteCat = (id, callback) => {
  const indexOfObject = cats.findIndex(object => {
    return object.id == id;
  });
  cats.splice(indexOfObject, 1);
  callback(cats);
}

self.updateCat = (id, body, callback) => {
  const indexOfObject = cats.findIndex(object => {
    return object.id == id;
  });
  cats[indexOfObject] = body;
  if ((typeof cats[indexOfObject].id) == 'string')
  cats[indexOfObject].id = parseInt(cats[indexOfObject].id);
  callback(cats);
}

module.exports = self;
