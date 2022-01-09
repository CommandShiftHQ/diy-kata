const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(60, 30)).toEqual("I should be there in 2 hours.");
    expect(reachDestination(85, 20)).toEqual("I should be there in 4.5 hours.");
  });
});
