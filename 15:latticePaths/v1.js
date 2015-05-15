// First I wrote down all the paths used for a 2x2 grid (0 for right, 1 for down);
// 0011, 0101, 0110, 1001, 1010, 1100
//which lead me to write the paths for a 3x3 grid;
// 000111, 001011, 001101, 001110, 010011, 010101, 010110, 011010, 011001, 011100
// 111000, 110100, 110010, 110001, 101100, 101010, 101001, 100101, 100110, 100011
//
// From there, I recognized that I needed a patten.  After a while, I realized that
// this was a binary coefficient pattern, where the answer was in the middle of every 2n+2.

//                 1
//               1 + 1
//             1 + 2 + 1
//           1 + 3 + 3 + 1
//         1 + 4 + 6 + 4 + 1
//       1 + 5 +10 +10 + 5 + 1
//     1 + 6 +15+ 20 +15 + 6 + 1
//   1 + 7 + 21+ 35+ 35+ 21+ 7 + 1
// 1 + 8 + 28+ 56+ 70+ 56+ 28+ 8 + 1

var latticePaths = function (gridNumber) {
  var count = 1;
  var array = [1,1];
  var newArray = [];

  while (count < gridNumber*2) {

    for (var i = 0; i < array.length-1; i++) {
      newArray.push(array[i] + array[i+1]);
    }

    newArray.push(1);
    newArray.unshift(1);
    array = newArray;
    newArray= [];
    count++;

    console.log(array);

  }
  return array[Math.floor(array.length/2)];
};

console.log(latticePaths(20));
