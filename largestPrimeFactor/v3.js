var largestPrimeFactor = function(test){
  var primeFactor = 1;

  for (var i = 2; i <= test ; i++){
    if (test%i === 0 && aPrime(test/i)){
      return test/i;
    }
  }

  return primeFactor;
};

var aPrime = function(testForPrime){
  for (var x = 2; x <= testForPrime/2 ; x++){
    if (testForPrime%x === 0) return false;
  }
  return true;
};

console.log(largestPrimeFactor(600851475143));
