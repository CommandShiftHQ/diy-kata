const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
 
    expect(reachDestination(60,60)).toEqual('1hr')
    expect(reachDestination(120, 60)).toEqual("2hr");
  });
});
