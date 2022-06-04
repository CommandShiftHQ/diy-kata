const reachDestination = require("../src/kata5.reachDestination");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    const [distanceA, speedA] = [44, 10];
    expect(reachDestination(distanceA, speedA)).toBe(
      "I should be there in 4.5 hours"
    );
    const [distanceB, speedB] = [96, 5];
    expect(reachDestination(distanceB, speedB)).toBe(
      "I should be there in 19 hours"
    );
    const [distanceC, speedC] = [172, 48];
    expect(reachDestination(distanceC, speedC)).toBe(
      "I should be there in 3.5 hours"
    );
    const [distanceD, speedD] = [12, 50];
    expect(reachDestination(distanceD, speedD)).toBe(
      "I should be there in 0 hours"
    );
  });
});
