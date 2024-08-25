function analyzeArray(array) {

    if (!Array.isArray(array)) throw Error(`Expected input of type array. Received input of type ${typeof array}`);
    if (!array.every(x => typeof x === "number")) throw Error("Expected all elements of the array to be of type number.");
    if (array.length === 0) throw Error("Array can not be empty.");

    return {
        average: array.reduce((acc, curr) => acc + curr, 0)/array.length,
        min: array.reduce((acc, curr) => ((curr < acc) ? curr:acc)),
        max: array.reduce((acc, curr) => ((curr > acc) ? curr:acc)),
        length: array.length,
    }
}

export default analyzeArray;