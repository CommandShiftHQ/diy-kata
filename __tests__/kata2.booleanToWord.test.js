import { booleanToWord } from '../src'

describe('booleanToWord', () => {
  it('returns "Yes" when passed True', () => {
    expect(booleanToWord(true)).toBe('Yes')
  })
  it('returns "No" when passed False', () => {
    expect(booleanToWord(false)).toBe('No')
  })
})


