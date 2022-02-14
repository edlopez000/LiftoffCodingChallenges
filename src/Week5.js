// Add up the Numbers from a Single Number

// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

const addUpEq = (number) => {
  // This is called a triangular number
  return (number * (number + 1)) / 2;
};

const addUpBrute = (number) => {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
};

module.exports = addUpBrute;
