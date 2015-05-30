// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
//
// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.
//
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
//
// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

var digitPowers = function(number, power) {
  var array = number.toString().split("");
  var result = array.reduce(function(sum, digit){
    return sum + Math.pow(digit, power);
  },0);
  return result === number;
};

var loopingThrough = function(limit, power) {
  var sum = 0;
  for (var i = 2; i < limit; i++) {
    if (digitPowers(i, power)) sum += i;
  }
  return sum;
};

console.log(loopingThrough(1000000, 5));
