const request = require("request");
const cities = ["Paris", "Bordeau", "Marseille", "Lyon"];

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

async function generateCat(callback) {
  var picture = await getPicture();

  request("https://api.namefake.com/", { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    callback({
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

module.exports = {
  generateCat,
};
