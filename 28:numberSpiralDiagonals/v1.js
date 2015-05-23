// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
//
// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13
//
// It can be verified that the sum of the numbers on the diagonals is 101.
//
// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?


// After whiteboarding, I saw the following pattern:

//   numbers       | add | table size
// -----------------------------------
//   3, 5, 7, 9    | +2   | 3x3 table
//  13, 17, 21, 25 | +4   | 5x5 table
//  31, 37, 43, 49 | +6   | 7x7 table
//  57, 65, 73, 81 | +8   | 9x9 table
//  91,101,111,121 | +10  | 11x11 table

var spiralDiagonalSum = function(matrixWidth) {
  var sum = 1;
  var number = 1;
  var saveValues = [];

  function addToSpiralSum(addAmount, firstNumber) {
    var num = firstNumber,
        total = 0;

    for (var count = 0; count < 4; count++){
      num += addAmount;
      total += num;
    }
    return Array(total, num);
  }

  for (var tableSize = 3; tableSize <= matrixWidth; tableSize +=2){
    saveValues = addToSpiralSum(tableSize-1, number);
    sum += saveValues[0];
    number = saveValues[1];
  }

  return sum;
};


console.log(spiralDiagonalSum(1001));
