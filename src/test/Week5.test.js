const addUpBrute = require('../Week5');

test('add up all numbers from 1 to the number provided', () => {
  expect(addUpBrute(4)).toBe(10);
  expect(addUpBrute(13)).toBe(91);
  expect(addUpBrute(600)).toBe(180300);
});
