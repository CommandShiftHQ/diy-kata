const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it("when passed true booleanToWord should return 'Yes'", ()=>{
    expect(booleanToWord(true)).toBe('Yes');
  })

  it("when passed false booleanToWord should return 'No'", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
