const { humanCatDogYears } = require('../src');
    describe('humanCatDogYears', () => {
      it('provides array of human, cat and dog years for a given number', () => {
        expect(humanCatDogYears(10)).toEqual([10 , 56 , 64])
      });
    });

