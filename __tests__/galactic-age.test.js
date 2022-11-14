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
 
});