const { joinNames } = require("../src");

describe("joinNames", () => {
  const friendsArray = [
    { name: "Ross" },
    { name: "Joey" },
    { name: "Rachel" }
  ];


  it("returns string of names, seperated by commas and an ampersand from the friendssArray", () => {
    expect(joinNames(friendsArray)).toBe("Ross, Joey & Rachel");
  });
});
