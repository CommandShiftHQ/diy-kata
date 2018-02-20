import { humanCatDogYears } from '../src'

it('returns object of human cat and dog year equivalents when passed age ', () => {
    

    expect(humanCatDogYears(10)).toEqual({human: 10, cat: 60, dog: 70})

  })
