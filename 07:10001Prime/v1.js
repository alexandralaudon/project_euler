//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
//we can see that the 6th prime is 13.

//What is the 10 001st prime number?

// calculate what is a prime number?
// enter a loop counting up to the maximum number, how many prime numbers there are.

var isPrime = function(number){
  for (var i = 2; i < number/2; i++){
    if (number%i === 0) return false;
  }
  return true;
};

var countPrime = function(maximum){
  var primeNumber,
      count = 0,
      i = 2;

  while(count <= maximum){
    if (isPrime(i)) {
      primeNumber = i;
      count++;
    }
    i++;
  }
  return primeNumber;
};

console.log(countPrime(10001));
