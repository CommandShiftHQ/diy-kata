const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie");

    expect(joinNames([{ name: "Nathan" }, { name: "Joe" }])).toBe(
      "Nathan & Joe"
    );

    expect(
      joinNames([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "John" },
      ])
    ).toBe("Bart, Lisa, Maggie & John");
  });
});
