//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?

// Example: 13195

// If 13195%2 === 0, find the element that makes up 13195 using 13195/2.
//    then check if that is a prime number.
// If 13195%3 === 0, find the element that makes up 13195 using 13195/3.
//    then check if that is a prime number


var aPrime = function(testForPrime){
  for (var x = 2; x <= testForPrime/2 ; x++){
    if (testForPrime%x === 0) return false;
  }
  return true;
};

var largestPrimeFactor = function(test){
  var endPoint = Math.round(test/2),
      primeFactor = 0,
      matchingFactor = 0;

  for (var i = 2; i <= endPoint ; i++){
    if (test%i === 0){
      matchingFactor = test/i;
      if (aPrime(matchingFactor)){
        primeFactor = matchingFactor;
        break;
      }
    }
  }

  return primeFactor;
};

console.log(largestPrimeFactor(600851475143));
