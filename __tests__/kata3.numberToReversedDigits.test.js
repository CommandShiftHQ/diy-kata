const { numberToReversedDigits } = require('../src');

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1])
    expect(numberToReversedDigits(1357)).toEqual([7, 5, 3, 1])
  });
});
