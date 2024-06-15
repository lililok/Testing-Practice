const analyzeArray = require('../src/analyzeArray.js');

test('default', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
  });

    test('larger', () => {
    expect(analyzeArray([10, 23, 5, 3, 17, 8, 12, 14])).toEqual({
        average: 11.5,
        min: 3,
        max: 23,
        length: 8,
    });
});

test('one element', () => {
    expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1,
    });
});