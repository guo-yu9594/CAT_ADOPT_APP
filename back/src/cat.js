const request = require("request");
const cities = ["Paris", "Bordeau", "Marseille", "Lyon"];
const genders = ["Male", "Female"];
const races = ["Persan", "Maine coon", "British shorthair", "Bengal", "Norvégien", "Sibérien"];
var cats = [];
var self = {};
const filters = [
  {
    title: 'Race',
    items: races
  },
  {
    title: 'Ville',
    items: cities
  },
  {
    title: 'Sexe',
    items: genders
  },
  {
    title: 'Âge',
    items: ['moins de 1', '1 à 3', '4 à 6', '7 à 9', 'plus de 10']
  },
  {
    title: 'Status',
    items: ['Adoptable', 'Demande en cours', 'Adopté']
  }
];

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

function randomElementFromArray(arr)
{
  return arr[getRandomInt(arr.length - 1)];
}

function getCity() {
  return randomElementFromArray(cities);
}

function getGender() {
  return randomElementFromArray(genders);
}

function getRace() {
  return randomElementFromArray(races);
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
      gender: getGender(),
      race: getRace(),
      city: getCity(),
      description: body.company,
      photo: picture,
      status: "Adoptable",
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
  callback(cats);
}

self.getFilters = (callback) => {
  callback(filters);
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

self.adoptCat = (id, callback) => {
  const indexOfObject = cats.findIndex(object => {
    return object.id == id;
  });
  cats[indexOfObject].status = 'Demande en cours';
  callback(cats[indexOfObject]);
}

module.exports = self;
