const func = require("../src/cat");

export class CatController {
  constructor() {}
  random() {
    var cat;

    func.generateCat((res) => {
      cat = res;
    });
    return cat;
  }
}
