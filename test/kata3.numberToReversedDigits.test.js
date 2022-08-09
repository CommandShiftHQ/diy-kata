const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123456789)).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(123)).toStrictEqual([3, 2, 1]);
    expect(numberToReversedDigits(7658376)).toStrictEqual([6, 7, 3, 8, 5, 6, 7]);
  });
});
