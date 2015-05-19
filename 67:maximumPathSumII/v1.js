// used the same solution as 18.
var matrixPath = require('../pe67_triangle');

var maximum = function(matrix) {
  var filteredRow;

  for (var row = matrix.length-1; row > 0; row--){
    filteredRow = matrix[row-1];
    for (var column = 0; column < matrix[row].length-1; column++){
      filteredRow[column] += Math.max(matrix[row][column], matrix[row][column+1]);
    }
  }
  return filteredRow[0];
};

console.log(maximum(matrixPath));
