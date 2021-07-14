const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival 44/10", () => {
    expect(reachDestination(44, 10)).toBe("should reach destination in 4.5 hours.");
  });
});