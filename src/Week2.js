/* eslint-disable no-console */
/*
Create a function that takes an array of numbers and
return both the minimum and maximum numbers, in that order.
*/
const assert = require('assert');

const minMax = (numArr) => [Math.min(...numArr), Math.max(...numArr)];

try {
  assert.deepEqual(minMax([1, 2, 3, 4, 5]), [1, 5]);
  console.log(minMax([1, 2, 3, 4, 5]));
} catch (error) {
  console.log(error);
}

try {
  assert.deepEqual(minMax([2334454, 5]), [5, 2334454]);
  console.log(minMax([2334454, 5]));
} catch (error) {
  console.log(error);
}

try {
  assert.deepEqual(minMax([1]), [1, 1]);
  console.log(minMax([1]));
} catch (error) {
  console.log(error);
}
