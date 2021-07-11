const { humanCatDogYears } = require("../src");

describe("convertts human years to cat and dog years", () => {
 it.only('Converts Human years to cat years and dog years vaguely ',()=>{
 expect(humanCatDogYears(10)).toEqual([10,56,64])
 expect(humanCatDogYears(5)).toEqual([5,36,39])
  });
})

// Look Ma, no handlebars!!!
