function translateCode(code, x) {
    const capitalStart = "A".charCodeAt(0);
    const lowerCaseStart = "a".charCodeAt(0);
    const lowerCaseEnd = "z".charCodeAt(0);

    if (code < capitalStart || code > lowerCaseEnd) return code;

    const lowerBound = code < lowerCaseStart ? capitalStart:lowerCaseStart;
    const alphaOrder = ((code - lowerBound + x) % 26 + 26) % 26;
    return alphaOrder + lowerBound;
}

function ceasarCipher(str, x) {

    if (typeof str != "string") throw Error("Expected first input of type string.");
    if (!Number.isInteger(x)) throw Error("Expected second input of type integer.");
    if (str.length === 0 || x === 0) return str;

    const output = [];

    for (let index = 0; index < str.length; index++) {
        const newCode = translateCode(str.charCodeAt(index), x)
        output.push(String.fromCharCode(newCode));
    }
    return output.join("");
}

export default ceasarCipher;