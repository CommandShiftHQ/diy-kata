const { numberToReversedDigits } = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toEqual([5,4,3,2,1]);
    expect(numberToReversedDigits(5689)).toEqual([9,8,6,5]);
    expect(numberToReversedDigits(39136)).toEqual([6,3,1,9,3]);
    expect(numberToReversedDigits(11111)).toEqual([1,1,1,1,1]);
  });

});
