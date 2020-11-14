const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(9)).toEqual("Fizz");
    expect(fizzBuzz(33)).toEqual("Fizz");
    expect(fizzBuzz(57)).toEqual("Fizz");
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(10)).toEqual("Buzz");
    expect(fizzBuzz(35)).toEqual("Buzz");
    expect(fizzBuzz(100)).toEqual("Buzz");
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(45)).toEqual("FizzBuzz");
    expect(fizzBuzz(60)).toEqual("FizzBuzz");
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toEqual(4);
    expect(fizzBuzz(11)).toEqual(11);
    expect(fizzBuzz(131)).toEqual(131);
  });
});
