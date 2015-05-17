//Gearing up to standardize and create a recursive version of this solution

var numbersWordObject = {
  ones: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
  teens: ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
};

var NumbersWordFunction = function(number){
  var letterCount = '';
  var numReduce = number;

  if (numReduce === 1000) {
    thousandsNum = Number(String(numReduce).charAt(0));
    letterCount += numbersWordObject["ones"][thousandsNum] + "thousand";
    numReduce -= thousandsNum*1000;
  }

  if (numReduce >= 100) {
    hundredsNum = Number(String(numReduce).charAt(0));
    letterCount += numbersWordObject["ones"][hundredsNum] + 'hundred';
    numReduce -= hundredsNum*100;
    if (numReduce > 0) letterCount += "and";
  }

  if (numReduce >= 20) {
    tensNum = Number(String(numReduce).charAt(0));
    letterCount += numbersWordObject["tens"][tensNum];
    numReduce -= tensNum*10;
  }

  if (numReduce >= 11) {
    teensNum = Number(String(numReduce).charAt(1));
    letterCount += numbersWordObject["teens"][teensNum];
    numReduce = 0;
  }

  if (numReduce > 0) {
    onesNum = numReduce;
    letterCount += numbersWordObject["ones"][onesNum];
    numReduce = 0
  }

  // console.log(letterCount);
  return letterCount.length;
};

var numberLetterCounts = function(begin, end) {
  var count = 0;

  for (var i = begin; i <= end; i++) {
    count += NumbersWordFunction(i);
  }
  return count;
};

console.log(numberLetterCounts(1,1000));
