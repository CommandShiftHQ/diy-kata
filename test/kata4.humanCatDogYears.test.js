const { humanCatDogYears } = require("../src");

describe('humanCatDogYears', () => {
    it("When passed a number representing human years it should return an array of first number equal to human years, second number equal cat years and last number equal dog years", () =>{
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
        expect(humanCatDogYears(25)).toStrictEqual([25, 116, 139]);
        expect(humanCatDogYears(2)).toStrictEqual([2, 24, 24]);
    });
})
// Look Ma, no handlebars!!!
