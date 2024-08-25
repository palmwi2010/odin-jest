function capitalize(str) {
    if (typeof str != "string") {
        throw Error(`Capitalize expected input of type string. Received input of type ${typeof str}`);
    }
    if (str.length === 0) return str;
    return str[0].toUpperCase().concat(str.slice(1))
}

function reverseString(str) {
    if (typeof str != "string") {
        throw Error(`Expected input of type string. Received input of type ${typeof str}`);
    }
    return str.split("").reverse().join("");
}

export { capitalize, reverseString }