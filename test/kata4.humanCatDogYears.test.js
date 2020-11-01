const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
//returns array of human, cat and dog years when passed human years

describe("humanCatDogYears", () => {
    it ( "returns array of human years  ",()=>{
      expect(humanCatDogYears(1)).toEqual([1, 15, 15])
    })
   it ( "returns array of cat years  ",()=>{
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])
    })
    it ( "returns array of dog years   ",()=>{
        expect(humanCatDogYears(3)).toEqual([3, 28, 29])
    })
        
  });

  