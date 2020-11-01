const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it ( "returns 12345 into a reversed array   ",()=>{
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1])
  })
  
});
