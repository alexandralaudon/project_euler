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

  return array.reduce(function (total, number){
    if (isPrime(number)){
      return total + number;
    }
    return total;
  }, 0);
};

console.log(sumPrimes(2000000));
