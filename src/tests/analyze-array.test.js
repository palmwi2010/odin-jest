import analyzeArray from "../analyze-array";

const baseArray = [15, 10, 5];

test("average", () => {
    expect(analyzeArray(baseArray).average).toBe("10")
})

test("min", () => {
    expect(analyzeArray(baseArray).min).toBe("5")
})

test("max", () => {
    expect(analyzeArray(baseArray).max).toBe("15")
})

test("length", () => {
    expect(analyzeArray(baseArray).average).toBe("3")
})

test("not array", () => {
    expect(() => analyzeArray("fish")).toThrow();
})

test("empty array length", () => {
    expect(analyzeArray([]).length).toBe(0);
})

test("empty array average", () => {
    expect(analyzeArray([]).average).toBeNull();
})

test("array mixed type", () => {
    expect(() => analyzeArray([1, 2, "fish"])).toThrow();
})