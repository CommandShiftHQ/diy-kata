const { booleanToWord } = require("../src");

describe("booleanToWord", () => {

  it((`should return "Yes" when passed true`), () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  it((`should return "No" when passed false`), () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
