// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit
// numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Go down in numbers
// Check if number[0] === number [-1]
//       && number[1] === number[-2]
//       && number[2] === number[-3]

var largestPalindrome = function(){
  var pali = 1,
      potentialPali = pali;

  for (var i = 999; i >= 900 ; i--){
    for (var j = 999; j >= 900 ; j--){
      potentialPali = i*j;
      if (potentialPali > pali && testPali(potentialPali)){
        pali = potentialPali;
      }
    }
  }
  return pali;
};


var testPali = function(number){
  var paliString = String(number);
  var paliLength = paliString.length;

  for (var i = 0; i < paliLength/2; i++){
    if (paliString[i] !== paliString.charAt(paliLength-(i+1))) return false;
  }
  return true;
}

console.log(largestPalindrome());
