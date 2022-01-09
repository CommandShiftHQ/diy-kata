const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when it passes true", () => {
    expect(booleanToWord(true)).toBe("Boolean passed in true");
    expect(booleanToWord(false)).toBe("Boolean passed in false");
  });
});
