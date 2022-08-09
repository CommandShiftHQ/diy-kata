const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(60, 3)).toBe("I should be there in 20 hours.");
    expect(reachDestination(100, 27)).toBe("I should be there in 3.5 hours.");
    expect(reachDestination(200, 100)).toBe("I should be there in 2 hours.");
    expect(reachDestination(200, 150)).toBe("I should be there in 1.5 hours.");
  });
});
