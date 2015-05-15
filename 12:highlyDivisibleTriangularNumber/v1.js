var triangularNumber = function(limit) {
  var triangleNumber = 0;

  for (var i = 1; i ; i++){
    triangleNumber += i;
    if (countFactors(triangleNumber) > limit) return triangleNumber;
  }
};


var countFactors = function(number) {
  var count = 0;

  for (i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number%i === 0) count +=2;
  }
  return count;
}

console.log(triangularNumber(500));
