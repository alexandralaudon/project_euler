var cannotExceed = 4000000;
var firstFib = 1,
    secondFib = 2,
    substitute = 0,
    evenSum = 0;

while (secondFib < cannotExceed) {
  substitute = firstFib + secondFib;
  firstFib = secondFib;
  secondFib = substitute;
  if (firstFib%2===0) evenSum += firstFib;
};

console.log(evenSum);
