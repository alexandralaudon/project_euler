//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.


// now I'm trying to make an array of numbers, and delete them whenever
// we go up a number to delete all the instances of composite numbers.

var isPrime = function(number){
  for (var i = 2; i <= number/2; i++){
    if (number%i === 0) return false;
  }
  return true;
};

var makeArray = function(limit){
  var array = [];
  for (var i = 2; i < limit; i++){
    array.push(i);
  }
  return array;
};

var sumPrimes = function(limit){
  var array = makeArray(limit);
  var primesArray = [];

  primesArray = array.filter(function (number) {
    return isPrime(number);
  });

  return primesArray.reduce(function (total, number){
    return total + number;
  });
};

console.log(sumPrimes(2000000));
