import Calculator from "../maths";

// Add
test('add', () => {
    expect(Calculator.add(3,5)).toBe(8);
})

test('add with zero', () => {
    expect(Calculator.add(0,5)).toBe(5);
})

test('add with floating', () => {
    expect(Calculator.add(3.2, 5.5)).toBeCloseTo(8.7);
})

test('add with non number', () => {
    expect(() => Calculator.add('fish', 5)).toThrow();
})

// Subtract
test('subtract', () => {
    expect(Calculator.subtract(5,3)).toBe(2);
})

test('subtract less than 0', () => {
    expect(Calculator.subtract(5,8)).toBe(-3);
})

test('subtract with floating', () => {
    expect(Calculator.subtract(7.7, 5.5)).toBeCloseTo(2.2);
})

test('subtract with non number', () => {
    expect(() => Calculator.subtract('fish', 5)).toThrow();
})

// Multiply
test('multiply', () => {
    expect(Calculator.multiply(5,3)).toBe(15);
})

test('multiply by 0', () => {
    expect(Calculator.multiply(5,0)).toBe(0);
})

test('multiply by negative', () => {
    expect(Calculator.multiply(5,-2)).toBe(-10);
})

test('multiply two negatives', () => {
    expect(Calculator.multiply(-5,-5)).toBe(25);
})

test('multiply with floating', () => {
    expect(Calculator.multiply(2.5, 10.1)).toBeCloseTo(25.25);
})

test('multiply with non number', () => {
    expect(() => Calculator.multiply('fish', 5)).toThrow();
})

// divide
test('divide', () => {
    expect(Calculator.divide(9,3)).toBe(3);
})

test('divide by 0', () => {
    expect(() => Calculator.divide(5,0)).toThrow();
})

test('divide by negative', () => {
    expect(Calculator.divide(10,-2)).toBe(-5);
})

test('divide two negatives', () => {
    expect(Calculator.divide(-5,-5)).toBe(1);
})

test('divide with floating', () => {
    expect(Calculator.divide(20, 0.1)).toBeCloseTo(200.0);
})

test('divide with non number', () => {
    expect(() => Calculator.divide('fish', 5)).toThrow();
})