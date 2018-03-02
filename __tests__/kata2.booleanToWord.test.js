import { booleanToWord } from '../src'

describe('booleanToWord', () => {
  it ('returns Yes when true is passed otherwise No',() => {
    expect(booleanToWord(true)).toBe('Yes')
    expect(booleanToWord(false)).toBe('No')
  })
})