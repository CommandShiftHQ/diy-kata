const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of numbers", () => {
    expect(numberToReversedDigits(6575)).toEqual([5, 7, 5, 6]);
  });
});
