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

  mars() {
    return parseInt(this.age / 1.88);
  }

  jupiter() {
    return parseInt(this.age / 11.86);
  }

  yrsLeft(planet, lifeExpectancy) {
    let yrsLeft;
    switch (planet) {
      case ('mercury'):
        yrsLeft = parseInt((lifeExpectancy / .24) - (this.age / .24));
        break;
      case ('venus'):
        yrsLeft = parseInt((lifeExpectancy / .62) - (this.age / .62));
        break;
      case ('mars'):
        yrsLeft = parseInt((lifeExpectancy / 1.88) - (this.age / 1.88));
        break;
      case ('jupiter'):
        yrsLeft = parseInt((lifeExpectancy / 11.86) - (this.age / 11.86));
        break;
    }
    if(this.age > lifeExpectancy) {
      return Math.abs(yrsLeft);
    }else {
      return yrsLeft;
    }
  }

}

