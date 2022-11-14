export default class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  mercury() {
    let mercuryAge = parseInt(this.age / .24);
    return mercuryAge;
  }

}