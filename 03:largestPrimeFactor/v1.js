//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?

// Example: 7

//If the end point is 24, start with a third (8).
//Now iterate through all numbers from 3 to (12).

var isThisAPrime = function(testForPrime){
  for (var x = 2; x <= testForPrime/2 ; x++){
    if (testForPrime%x === 0) return false;
  }
  return true;
};

var largestPrimeFactor = function(number){
  var primeFactor = 0;
  var endPoint = Math.round(number/2);

  for (var i = endPoint; i >= 2 ; i--){
    if (number%i === 0 && isThisAPrime(i)){
      primeFactor = i;
      break;
    }
  }

  return primeFactor;
};

console.log(largestPrimeFactor(600851475143));
