// First, I thought I could just compute all calculations, but that seems like it defeats the purpose of it all.
// Looking back at the original example, it looks like the selected items are chosen based which element is higher after the one chosen.
// That didn't work, so I'm trying to start from the bottom up, which gives me a better chance at getting the right answer.
// That didn't work, so I thought of appending the results for every row, starting from the bottom, so I can gage the best answer at the top.

var matrixPath = [
[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20, 04, 82, 47, 65],
[19, 01, 23, 75, 03, 34],
[88, 02, 77, 73, 07, 63, 67],
[99, 65, 04, 28, 06, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]];


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
