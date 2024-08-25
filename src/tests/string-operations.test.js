import { capitalize, reverseString } from "../string-operations.mjs";

// Capitalize
test("all lower case", () => {
    expect(capitalize("fish")).toBe("Fish");
});

test("empty string", () => {
    expect(capitalize("")).toBe("");
});

test("one character", () => {
    expect(capitalize("f")).toBe("F")
});

test("number", () => {
    expect(() => capitalize(5)).toThrow(Error);
});

// Reverse string
test("base case", () => {
    expect(reverseString("fish")).toBe("hsif");
});

test("empty string", () => {
    expect(reverseString("")).toBe("");
});

test("number", () => {
    expect(() => reverseString(5)).toThrow(Error);
});
