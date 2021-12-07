const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when it passes true", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
