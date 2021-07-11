const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it('Changes true to yes and false to no', () => {
    expect(booleanToWord(true)).toEqual('yes')
    expect(booleanToWord(false)).toEqual('no')

  })
  
});
// describe("onlyEven", () => {
//   xit("filters the array and only returns even numbers", () => {
//     expect(onlyEven([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
//   });
// });