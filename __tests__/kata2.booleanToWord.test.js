import { booleanToWord } from '../src'

describe('booleanToWord', () => {
  it('returns boolean when passed a multiple of 3', () => {
  expect(booleanToWord(true)).toBe('true')
  expect(booleanToWord(false)).toBe('false')
  })
})
