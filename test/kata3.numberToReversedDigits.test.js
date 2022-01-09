const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toBe(54321);
    expect(numberToReversedDigits(299354)).toBe(453992);
    expect(numberToReversedDigits(64756)).toBe(65746);
  });
});
