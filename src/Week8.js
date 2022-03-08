// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and
// returns the number of times the first string (the single character) is found in the second string.
// Your output must be case-sensitive (see second test).

const charCount = (char, phrase) => {
  let count = 0;
  Array.from(phrase).reduce((prev, curr) => {
    if (char === curr) {
      count += 1;
    }
  }, 0);
  return count;
};

module.exports = charCount;
