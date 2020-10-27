const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  it("should return an array of 3 numbers", () => {
    expect(humanCatDogYears(10)).toHaveLength(3)
  });

  it("should have the passed argument at index 0", () => {
    expect(humanCatDogYears(10)[0]).toBe(10)
  });

  it("should have the equivalent cat years at index 1", () => {
    expect(humanCatDogYears(10)[1]).toBe(56)
  });

  it("should have the equivalent dog years at index 2", () => {
    expect(humanCatDogYears(10)[2]).toBe(64)
  });

  it("should calculate cat and dog years according to the given human year", () => {
    expect(humanCatDogYears(3).toEqual([3, 28, 29]))
    expect(humanCatDogYears(6).toEqual([6, 40, 44]))
  })
});


// Formulas for calculating cat and dog years
// Cat Years
// 15 cat years for first human year

// +9 cat years for second human year

// +4 cat years for each human year after that

// Dog Years
// 15 dog years for first year

// +9 dog years for second year

// +5 dog years for each year after that