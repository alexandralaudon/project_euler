// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit
// numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Go down in numbers
// Check if number[0] === number [-1]
//       && number[1] === number[-2]
//       && number[2] === number[-3]

var largestPalindrome = function(){
  var palindromeNumber = 0;
  var potentialPalindrome = 1;

  for (var i = 999; i >= 900 ; i--){
    for (var j = 999; j >= 900 ; j--){
      potentialPalindrome = i*j;
      if (testPalindrome(potentialPalindrome) && potentialPalindrome > palindromeNumber){
        palindromeNumber = potentialPalindrome;
      }
    }
  }
  return palindromeNumber;
};


var testPalindrome = function(number){
  var paliString = String(number);
  var paliLength = paliString.length;
  var check = Math.round(paliLength/2);

  for (var i = 0; i < check; i++){
    if (paliString[i] !== paliString.charAt(paliLength-(i+1))) return false;
  }
  return true;
}

console.log(largestPalindrome());




















//sdfdsf
