const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns array of human, cat and dog years when passed human year", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    expect(humanCatDogYears(14)).toStrictEqual([14, 72, 84]);
    expect(humanCatDogYears(32)).toStrictEqual([32, 144, 174]);
  });
});
