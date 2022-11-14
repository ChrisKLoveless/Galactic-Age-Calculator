import GalacticAge from "../src/js/galactic-age";

describe("Galactic Age", () => {
  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(50);
  })

  test("1 should create a class containing users' age", () => {
    expect(galacticAge.age).toEqual(50); 
  })
    
  test("2 should return users' age in mercury years", () => {
    expect(galacticAge.mercury()).toEqual(208);
  })

  test("3 should return users' age in venus years", () => {
    expect(galacticAge.venus()).toEqual(80);
  })

  test("4 should return users' age in mars years", () => {
    expect(galacticAge.mars()).toEqual(26);
  })

  test("5 should return users' age in jupiter years", () => {
    expect(galacticAge.jupiter()).toEqual(4)
  })

  test("6 should return users' years left to live on a given planet", () => {
    expect(galacticAge.yrsLeft('mercury', 75)).toEqual(104);
    expect(galacticAge.yrsLeft('venus', 75)).toEqual(40);
    expect(galacticAge.yrsLeft('mars', 75)).toEqual(13);
    expect(galacticAge.yrsLeft('jupiter', 75)).toEqual(2);
  })

  test("7 should return years lived past life expectancy on a given planet", () => {
    let galacticAge = new GalacticAge(100);
    expect(galacticAge.yrsLeft('mercury', 75)).toEqual(104);
    expect(galacticAge.yrsLeft('venus', 75)).toEqual(40);
    expect(galacticAge.yrsLeft('mars', 75)).toEqual(13);
    expect(galacticAge.yrsLeft('jupiter', 75)).toEqual(2);
  })
 
});