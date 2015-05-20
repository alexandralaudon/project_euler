// Evaluate the sum of all the amicable numbers under 10000.

// So I looked up Amicable Numbers formula, which is listed on http://planetmath.org/aformulaforamicablepairs but that only
// gave me 220+284, and 2620+2924.  So I started over again, counting up with all divisors

// 220+284
// 1184+1210
// 2620+2924
// 5020+5564
// 6232+6368

var sumDivisors = function(number){
  var total = 1;
  for (i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number%i === 0) {
      total += i;
      total += number/i;
    }
  }
  return total;
};


var amicableNumbers = function(number) {
  if (number > 10000) return 0;
  
  var matchingNumber = sumDivisors(number);
  var sum = (number === sumDivisors(matchingNumber) && matchingNumber !== number) ? number: 0;

  return sum + amicableNumbers(number+1);
};

console.log(amicableNumbers(220));
