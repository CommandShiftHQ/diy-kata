const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test('converts a boolean to string', () =>{
    expect(booleanToWord(true)).toEqual('YES')
  })
});


