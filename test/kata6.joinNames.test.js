const { joinNames } = require("../src");

describe("joinNames", () => {
  it.only("returns string of names, seperated by commas and an ampersand", () => {
expect(joinNames([{ name: "Bart" }, { name: "Ali" }, { name: "Omar" }, {name: 'Zahra'}])).toEqual('Bart, Ali, Omar & Zahra')

  });

});
