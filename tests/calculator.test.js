const calculator = require('../src/calculator.js');

test('plus', () => {
    expect(calculator.add(3, 4)).toBe(7);
  });

test('minus', () => {
    expect(calculator.subtract(3, 4)).toBe(-1);
});

test('multi', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
});

test('div', () => {
    expect(calculator.divide(12, 3)).toBe(4);
});