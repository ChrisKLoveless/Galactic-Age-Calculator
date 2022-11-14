import GalacticAge from "../src/js/galactic-age";

describe("Galactic Age", () => {
  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(50);
  })

  test("1 should create a class containing users' age", () => {
    expect(galacticAge.age).toEqual(50); 
  })
    

});