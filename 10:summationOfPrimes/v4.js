//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

var aPrime = function(number){
  for (var i = 2; i < number/2; i++){
    if (number%i === 0) return false;
  }
  return true;
};

var createArray = function(limit){
  var array = [];
  for (var i = 2; i < limit; i++)
    array.push(i);

  return array;
};


var summationPrimes = function(limit){
  var array = createArray(limit),
      multipleFactor = 2,
      multiple = 0,
      multipleIndex = 0;

  for (var i = 0; i < array.length; i++){
    if (aPrime(array[i])){
      multiple = 0;
      multipleFactor = 2;
      while (multiple < limit){
        multiple = array[i]*multipleFactor;
        multipleIndex = array.indexOf(multiple);
        if (multipleIndex >= 0){
          array.splice(multipleIndex, 1);
        }
        multipleFactor++;
      }
    }
  }

  return array.reduce(function(total,elem){return total+elem});
};

console.log(summationPrimes(2000000));
