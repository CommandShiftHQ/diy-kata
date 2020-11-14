const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  //it how do we create specs again???
  it ("returns 'yes' when booleanToWord passes true ",()=>{
      expect(booleanToWord(true)).toBe('yes')
  })
  it ( "returns 'No' when booleanToWord passes false ",()=>{
    expect(booleanToWord(false)).toBe('no')
  })
});
