const numberToReversedDigits = require('../src/kata3.numberToReversedDigits.js')

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits(12345)).toEqual(['5', '4', '3', '2', '1'])
  });
});
