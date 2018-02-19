import { booleanToWord } from '../src'

describe('booleanToWord', () => {
    it('returns Yes when passed true', () => {
    expect(booleanToWord(true)).toBe('Yes')
    // expect the result Yes when boolean is true
    })
    
    it('returns No when passed false', () => {
    expect(booleanToWord(false)).toBe('No')
    // expect the result No when boolean is false
    })
})