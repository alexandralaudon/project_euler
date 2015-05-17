//If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

//If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

var numbersInLetters = function(number){
  var letterCount = "";
  var numberReduce = number;

  if (numberReduce === 1000) return 11;

  if (numberReduce >= 100) {
    hundredsDigit = Number(String(numberReduce).charAt(0));
    if (hundredsDigit === 1 || hundredsDigit === 2 || hundredsDigit === 6) letterCount += "one";
    if (hundredsDigit === 4 || hundredsDigit === 5 || hundredsDigit === 9) letterCount += "four";
    if (hundredsDigit === 3 || hundredsDigit === 7 || hundredsDigit === 8) letterCount += "three";
    letterCount += "hundred"
    numberReduce -= hundredsDigit*100;
    if (numberReduce > 0) letterCount += "and";
  }

  if (numberReduce >= 20) {
    tensDigit = Number(String(numberReduce).charAt(0));
    if (tensDigit === 4) letterCount += "forty";
    if (tensDigit === 2 || tensDigit === 3 || tensDigit === 8 || tensDigit === 9) letterCount += "twenty";
    if (tensDigit === 5 || tensDigit === 6) letterCount += "fifty";
    if (tensDigit === 7) letterCount += "seventy";
    numberReduce -= tensDigit*10;
  }


  if (numberReduce >= 11) {
    if (numberReduce === 11 || numberReduce === 12 ) letterCount += "eleven";
    if (numberReduce === 15 || numberReduce === 16 ) letterCount += "fifteen";
    if (numberReduce === 13 || numberReduce === 14 || numberReduce === 18 || numberReduce === 19) letterCount += "thirteen";
    if (numberReduce === 17 ) letterCount += "seventeen";
    numberReduce = 0;
  }

  if (numberReduce <= 10) {
    if (numberReduce === 1 || numberReduce === 2 || numberReduce === 6 || numberReduce === 10) letterCount += "one";
    if (numberReduce === 4 || numberReduce === 5 || numberReduce === 9) letterCount += "four";
    if (numberReduce === 3 || numberReduce === 7 || numberReduce === 8) letterCount += "three";
  }

  return letterCount.length;
};

var numberLetterCounts = function(begin, end) {
  var count = 0;

  for (var i = begin; i <= end; i++) {
    count += numbersInLetters(i);
  }
  return count;
};

console.log(numberLetterCounts(1,1000));
