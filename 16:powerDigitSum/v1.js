// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

// first I tried doing it this way, which returns NaN because the sum is now written in scientific notation, so it doesn't know how to compute with decimals and e notation.
// var powerDigitSum = function(number, exponent) {
//   var sum = Math.pow(number, exponent).toString().split("");
//   return sum.reduce(function(sum, digit){ return sum += Number(digit); }, 0);
// };
// console.log(powerDigitSum(2,1000));

// the first thing I had to do was to figure out how to catch all the digits that were being hidden with scientific notation
// I spent a few hours trying to figure that out to no avail.
// Someone suggested binary, since everything is represented as 2^nth power.  So I started looking at binary and how that was calculated.
// I realized that 2^n in binary is 1 + n*('0'), so the answer to 2^15 is 1 + 15*('0');

// I got pretty stuck on this one, and I don't want to look up the answer just yet, so I'm going to skip it and come back to it.
