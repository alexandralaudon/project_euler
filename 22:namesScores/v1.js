var namesFile = require('../pe22_names');

var nameScores = function(namesFromFile) {
  var names = namesFromFile;
  var sum = 0;
  var innerSum;

  names.sort();

  names.forEach(function(str, i){
    innerSum = 0;
    for (var char = 0; char < str.length; char++){
      innerSum += str.charCodeAt(char) - 64;
    }
    sum += innerSum*(i+1);
  });
  return sum;
};

console.log(nameScores(namesFile));
