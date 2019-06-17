const numberToReversedDigits = require('../src/kata3.numberToReversedDigits');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toEqual([5,4,3,2,1]);
    expect(numberToReversedDigits(34567)).toEqual([7,6,5,4,3]);
  });
});
