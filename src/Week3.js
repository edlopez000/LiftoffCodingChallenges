/* eslint-disable no-console */
const assert = require('assert');

function FirstReverse([...str]) {
  // return str.reduce((prev, curr) => curr + prev);
  return str.reverse().join('');
}

try {
  assert.deepEqual(FirstReverse('liftoff'), 'ffotfil');
  console.log(FirstReverse('liftoff'));
} catch (error) {
  console.log(error);
}
