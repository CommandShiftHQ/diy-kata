const numberToReversedDigits = require("../src/kata3.numberToReversedDigits");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    const number = 12345;
    expect(numberToReversedDigits(number)).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
