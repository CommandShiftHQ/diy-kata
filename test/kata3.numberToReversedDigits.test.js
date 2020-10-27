const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  const number = 12345;

  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(number)).toEqual([5, 4, 3, 2, 1]);
  });
});
