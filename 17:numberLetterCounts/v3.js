//Recursive Version

var wordRep = {
  ones: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ],
  tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  hundreds: ['', '', 'hundred', 'thousand']
};

var numbersWordFunction = function(numberToConvert){
  if (numberToConvert < 20) return wordRep["ones"][numberToConvert].length;

  var num = numberToConvert;
  var numArray = String(num).split('');
  var firstDigit = Number(numArray[0]);
  var word = numArray.length === 2 ? wordRep["tens"][firstDigit] : wordRep["ones"][firstDigit] + wordRep["hundreds"][numArray.length-1];
  num -= numArray.reduce(function(first, digit) {return first*10});
  if (numArray.length === 3 && num > 0) word += "and";

  return word.length + numbersWordFunction(num);
};

var numberLetterCounts = function(begin, end) {
  var count = 0;
  for (var i = begin; i <= end; i++) {
    count += numbersWordFunction(i);
  }
  return count;
};

console.log(numberLetterCounts(1,1000));
