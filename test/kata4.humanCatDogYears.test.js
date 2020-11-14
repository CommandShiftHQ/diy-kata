const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("should return an array with length 3", () => {
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

  it("should return an array of 3 numbers: human, cat and dog years respectively", () => {
    expect(humanCatDogYears(3)).toEqual([3, 28, 29])
    expect(humanCatDogYears(6)).toEqual([6, 40, 44])
  })

});


