/* eslint-disable no-console */

const assert = require('assert');

function LongestWord(sen) {
  // Attempted to write something that didn't involve a super long string of punctations but failed
  return sen
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
    .split(' ')
    .reduce((prev, curr) => {
      if (curr.length > prev.length) {
        return curr;
      }
      return prev;
    });
}

try {
  assert.deepEqual(LongestWord('I love dogs'), 'love');
  console.log(LongestWord('I love dogs'));
} catch (error) {
  console.log(`You failed: ${error});
}

try {
  assert.deepEqual(LongestWord('fun&!! time'), 'time');
  console.log(LongestWord('fun&!! time'));
} catch (error) {
  console.log(error);
}

