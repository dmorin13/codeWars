// Write a method to predict the final outcome where:

// Input:

// kata-per-day is the number of Kata I can solve per day
// Output:

// [number-of-clones, number-of-kata-solved-by-clones]


var clonewars = function (n) {
  if (n === 0) return [1, 0];
  if (n === 1) return [1, 1];
  var previous = clonewars(n - 1);
  previous[0] *= 2;
  previous[1] = previous[1] * 2 + n;
  return previous;
};
