const request = require("request");
const cities = ["Paris", "Bordeau", "Marseille", "Lyon"];
const genders = ["Male", "Female"];
const races = ["Persan", "Maine coon", "British shorthair", "Bengal", "Norvégien", "Sibérien"];
var cats = [];
var self = {};
const filters = [
  {
    key: 'race',
    title: 'Race',
    items: races,
    target: ''
  },
  {
    key: 'city',
    title: 'Ville',
    items: cities,
    target: ''
  },
  {
    key: 'gender',
    title: 'Sexe',
    items: genders,
    target: ''
  },
  {
    key: 'age',
    title: 'Âge',
    items: ['moins de 1', '1 à 3', '4 à 6', '7 à 9', 'plus de 10'],
    cond: [{min: 0, max: 0}, {min: 1, max: 3}, {min: 4, max: 6}, {min: 7, max: 9}, {min: 10, max: 20}],
    target: ''
  },
  {
    key: 'status',
    title: 'Status',
    items: ['Adoptable', 'Demande en cours', 'Adopté'],
    target: ''
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

function calculateAge(birthday) {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
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

function getAge(birthdate) {
  return calculateAge(birthdate);
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
      age: getAge(body.birth_data) % 18,
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

function checkAge(category, cat)
{
  var index = 0;

  if (category.key === 'age') {
    index = category.items.findIndex(object => {
      return object === category.target;
    });
    if (cat.age >= category.cond[index].min && cat.age <= category.cond[index].max)
      return true;
  }
  return false;
}

self.getFilteredList = (body, callback) => {
  var list = [];

  cats.map(function (cat) {
    var fit = true;

    for (var i = 0; i < body.length; i++) {
      if (body[i].target.length > 0) {
        if (body[i].target !== cat[body[i].key] && checkAge(body[i], cat) === false)
          fit = false
      }
    }
    if (fit === true)
      list.push(cat);
  })
  // console.log(list);
  callback(list);
}

module.exports = self;
