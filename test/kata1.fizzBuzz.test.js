const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(6)).toBe('Fizz')
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(25)).toBe('Buzz')
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(90)).toBe("FizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(11)).toBe(11);
  });
});
