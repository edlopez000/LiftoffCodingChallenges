/* eslint-disable no-console */
// https://edabit.com/challenge/3CaszbdZYGN4otQD8
// Write a function that takes the base and height of a triangle and return its area.

const assert = require('assert').strict;

const triArea = (base, height) => (base * height) / 2;

try {
  assert.deepEqual(triArea(3, 2), 3);
  console.log(triArea(3, 2));
} catch (error) {
  console.log(error);
}

try {
  assert.deepEqual(triArea(7, 4), 14);
  console.log(triArea(7, 4));
} catch (error) {
  console.log(error);
}

try {
  assert.deepEqual(triArea(10, 10), 50);
  console.log(triArea(10, 10));
} catch (error) {
  console.log(error);
}
