const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    const numbers = [3, 6, 9, 12, 18, 21, 24];
    const results = ["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "Fizz"];

    expect(numbers.map(number => fizzBuzz(number))).toStrictEqual(results);
  });

  it("returns Buzz when passed a multiple of 5", () => {
    const numbers = [5, 10, 20, 25];
    const results = ["Buzz", "Buzz", "Buzz", "Buzz"];
    expect(numbers.map(number => fizzBuzz(number))).toStrictEqual(results);
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    const nums = [15, 30, 45, 60];
    const results = ["FizzBuzz", "FizzBuzz", "FizzBuzz", "FizzBuzz"];
    expect(nums.map(num => fizzBuzz(num))).toStrictEqual(results);
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    const numbers = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23];
    expect(numbers.map(number => fizzBuzz(number))).toStrictEqual(numbers);
  });
});
