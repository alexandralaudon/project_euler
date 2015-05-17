//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.


// end result - took two minutes to run, but I'm not seeing a shorter way to implement.

var isPrime = function(number){
  for (var i = 2; i <= number/2; i++){
    if (number%i === 0) return false;
  }
  return true;
};

var sumPrimes = function(limit){
  var i = 2,
      sum = 0;
  while (i<limit){
    if (isPrime(i)) sum += i;
    i++;
  }
  return sum;

};

console.log(sumPrimes(2000000));
