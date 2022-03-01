const Person = require('../Week7');

let p1 = new Person('Samuel', 24);
let p2 = new Person('Joel', 36);
let p3 = new Person('Lily', 24);

test('compare age', () => {
  expect(p1.compareAge(p2)).toBe('Joel is older than me');
  expect(p2.compareAge(p1)).toBe('Samuel is younger than me');
  expect(p1.compareAge(p3)).toBe('Lily is the same age as me');
});
