// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
//
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
// The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
//
// Evaluate the sum of all the amicable numbers under 10000.

// So I looked up Amicable Numbers formula, which is listed on http://planetmath.org/aformulaforamicablepairs.

// 220+284
// 1184+1210
// 2620+2924
// 5020+5564
// 6232+6368

var amicableNumbers = function(n) {
  if (n > 10) return 0;
  var firstAmi = Math.pow(2,n) * (3*Math.pow(2,n) -1) * (3*Math.pow(2,n-1) - 1),
      secondAmi = Math.pow(2,n) * (9*Math.pow(2, 2*n-1) -1),
      sum = firstAmi + secondAmi;

  // console.log("sum:", sum, " first:", firstAmi," second:", secondAmi, " n:", n);

  if (firstAmi >= 10000 && secondAmi >= 10000) sum = 0;

  return sum + amicableNumbers(n+1);
};

console.log(amicableNumbers(2));
