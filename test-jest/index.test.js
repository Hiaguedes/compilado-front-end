import {sum, phrase} from './index.js';

describe("Sum function",() => {
    test("add something",() => {

    })

    expect(sum(1, +2)).toBe(3);
    expect(sum(2, 2)).toEqual(4);
})

test("matcher", () => {
    expect(phrase).toMatch('tests')
})