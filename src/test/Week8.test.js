const charCount = require('../Week8');

test('count instances of a character in a string', () => {
  expect(charCount('a', 'edabit')).toBe(1);
  expect(charCount('c', 'Chamber of secrets')).toBe(1);
  expect(charCount('b', 'big fat bubble')).toBe(4);
  expect(charCount('e', 'Hello There')).toBe(3);
});
