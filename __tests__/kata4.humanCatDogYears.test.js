const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
  it('returns array of human, cat and dog years when passed human years', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(27)).toEqual([27, 124, 149]);
  });

  it('returns array of zeros when passed 0', () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
  });

  it('returns two arrays when passed two human years', () => {
    expect(humanCatDogYears(10, 27)).toEqual([10, 56, 64], [27, 124, 149]);
  })
});


