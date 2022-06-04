const humanCatDogYears = require("../src/kata4.humanCatDogYears")

describe("humanCatDogYears", () => {
  it("should take an amount of time in human years and return an object containing the number of years in dog years and cat years", () => {
    expect(humanCatDogYears(1)).toStrictEqual({
      dogYears: 15,
      catYears: 15
    });
    expect(humanCatDogYears(2)).toStrictEqual({
      dogYears: 24,
      catYears: 24
    });
    expect(humanCatDogYears(3)).toStrictEqual({
      dogYears: 29,
      catYears: 28
    });
    expect(humanCatDogYears(4)).toStrictEqual({
      dogYears: 34,
      catYears: 32
    });
  });
});
