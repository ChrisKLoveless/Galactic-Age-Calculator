export default class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  mercury() {
    return parseInt(this.age / .24);
  }

  venus() {
    return parseInt(this.age / .62);
  }

  mars () {
    
  }

}