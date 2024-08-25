import ceasarCipher from "../caesar";

test("base", () => {
    expect(ceasarCipher("abc", 3)).toBe("def");
})

test("negative shift", () => {
    expect(ceasarCipher("hij", -1)).toBe("ghi");
})

test("full cycle forward", () => {
    expect(ceasarCipher("hij", 26)).toBe("hij");
})

test("big negative shift", () => {
    expect(ceasarCipher("hij", -26)).toBe("hij");
})

test("wrapping", () => {
    expect(ceasarCipher("zay", 3)).toBe("cdb");
})

test("capital letters", () => {
    expect(ceasarCipher("ABC", 3)).toBe("DEF");
})

test("mixed letters", () => {
    expect(ceasarCipher("hIj", 2)).toBe("jKl");
})

test("punctuation", () => {
    expect(ceasarCipher("my, Friend", 1)).toBe("nz, Gsjfoe");
})

test("empty string", () => {
    expect(ceasarCipher("", 3)).toBe("");
})

test("non string input", () => {
    expect(() => ceasarCipher(5, 3)).toThrow();
})

test("non number shift", () => {
    expect(() => ceasarCipher("abc", "fruit")).toThrow();
})

test("non integer shift", () => {
    expect(() => ceasarCipher("abc", 3.5)).toThrow();
})
