const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns array of human, cat and dog years when passed human year", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
  });
});
