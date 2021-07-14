const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const players= [
    { name: "Harry", role: "Striker" },
    { name: "Sterling", role: "Winger" },
    { name: "Mings", role: "center back" },
    { name: "Saka", role: "winger" }
  ];

  it("returns the players role in the team", () => {
    expect(getEmployerRole("Harry", players)).toEqual("Striker");
  });
});
