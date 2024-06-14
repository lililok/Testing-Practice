const capitalize = require('../src/capitalize.js');

test('capitalize string', () => {
  expect(capitalize('cowboy')).toBe('Cowboy');
});

test('no nums', () => {
  expect(capitalize('1234')).toBe('1234');
});