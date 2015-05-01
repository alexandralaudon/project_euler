var allSquares = function(maximum){
  var sumSquares = 0,
      squareSums = 0;

  for(var i = 1; i <= maximum; i++) {
    sumSquares = sumSquares + (i*i);
    squareSums = squareSums + i;
  }
  squareSums *= squareSums;

  return squareSums - sumSquares;
}

console.log(allSquares(100));
