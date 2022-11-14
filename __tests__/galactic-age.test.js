import GalacticAge from "../src/js/galactic-age";

describe("Galactic Age", () => {
  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(50);
  })

  test("it should create a class containing users' age", () => {
    expect(galacticAge).toEqual(50); 
  })
    

});