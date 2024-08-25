class Calculator {

    static add(a, b) {
        if (typeof a != 'number' || typeof b != 'number') throw Error('Expected inputs of type number.')
        return a + b;
    }

    static subtract(a, b) {
        if (typeof a != 'number' || typeof b != 'number') throw Error('Expected inputs of type number.')
        return a-b;
    }

    static multiply(a, b) {
        if (typeof a != 'number' || typeof b != 'number') throw Error('Expected inputs of type number.')
        return a*b;
    }

    static divide(a, b) {
        if (typeof a != 'number' || typeof b != 'number') throw Error('Expected inputs of type number.')
        if (b === 0) throw Error("Can not divide by zero.")
        return a/b;
    }

}

export default Calculator