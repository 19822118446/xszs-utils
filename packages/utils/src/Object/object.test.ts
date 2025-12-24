import { describe, expect, it } from 'vitest';
import { omit, pick} from './object'


const object = { 'a': 1, 'b': '2', 'c': 3 };
console.log(pick(object,['a','a','a']));

describe('pick',()=>{
  it('should be test pick',()=>{
    expect(pick(object,['a','a','a'])).toMatchInlineSnapshot(`
      {
        "a": 1,
      }
    `)
  })
    it('should be test omit',()=>{
    expect(omit(object,['a'])).toMatchInlineSnapshot(`
      {
        "b": "2",
        "c": 3,
      }
    `)
  })
})
