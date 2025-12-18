import { describe, expect, it } from 'vitest'
import { groupBy } from '../Data/data'
import { testData } from './data'
import { getArrayAverage, getArrayTotal } from './math'

describe('getArrayTotal', () => {
  it('should return the total of the array', () => {
    expect(getArrayTotal([{ a: 1 }, { a: undefined }, { a: 3 }])).toEqual({ a: 4 })
    expect(getArrayTotal([{ a: 1, b: 2 }, { a: null, b: 3 }, { a: 3, b: 4 }], ['a', 'b'])).toEqual({ a: 4, b: 9 })
    expect(getArrayTotal([{ a: 1, b: 2 }, { a: null, b: 3 }, { a: 3, b: 4 }], ['a'])).toEqual({ a: 4 })
    expect(getArrayTotal([{ a: 1, b: 2 }, { a: null, b: 3 }, { a: 3, b: 4 }], 'a')).toEqual({ a: 4 })
    expect(getArrayTotal([{ a: 1, b: 2 }, { a: null, b: 3 }, { a: 3, b: 4 }], ['a', 'a'])).toEqual({ a: 4 })
  })
  it('should return the average of the array', () => {
    expect(getArrayAverage([{ a: 1 }, { a: undefined }, { a: 3 }])).toEqual({ a: 2 })
    expect(getArrayAverage([{ a: 1, b: 2 }, { a: null, b: 3 }, { a: 3, b: 4 }], ['a', 'b'])).toEqual({ a: 4 / 2, b: 9 / 3 })
    expect(getArrayAverage([{ a: 1, b: 2 }, { a: null, b: 3 }, { a: 3, b: null }], ['a', 'b'], true)).toEqual({ a: 4 / 3, b: 5 / 3 })
  })
})
