const reverseString = require('../src/reverseString.js');

test('reversed cowboy is yobwoc', () => {
  expect(reverseString('cowboy')).toBe('yobwoc');
});

test('string numbers', () => {
  expect(reverseString('5678')).toBe('8765');
});

test('spaces', () => {
  expect(reverseString('H e l l o')).toBe('o l l e H');
});