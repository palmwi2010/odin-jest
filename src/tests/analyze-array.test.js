import analyzeArray from "../analyze-array";

const baseArray = [5, 10, 15];

test("average", () => {
    expect(analyzeArray(baseArray).average).toBe(10)
})

test("min", () => {
    expect(analyzeArray(baseArray).min).toBe(5)
})

test("max", () => {
    expect(analyzeArray(baseArray).max).toBe(15)
})

test("length", () => {
    expect(analyzeArray(baseArray).length).toBe(3)
})

test("not array", () => {
    expect(() => analyzeArray("fish")).toThrow();
})

test("empty array", () => {
    expect(() => analyzeArray([])).toThrow();
})

test("array mixed type", () => {
    expect(() => analyzeArray([1, 2, "fish"])).toThrow();
})