// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var allSquares = function(maximum){

  var array = [];
  for (var i = 1; i <= maximum; i++) {
    array.push(i);
  }

  var sumSquares = array.reduce(function(total, num){ return total + num*num }, 0);
  var squareSums = array.reduce(function(total, num){ return total + num }, 0);
  squareSums *= squareSums;
  console.log(squareSums, " ", sumSquares);
  return squareSums - sumSquares;
}

console.log(allSquares(100));
