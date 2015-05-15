var longestCollatzSequence = function(start){
  var collatzNumber = start,
      count = 1;

  while (collatzNumber !== 1) {
    collatzNumber = collatzNumber % 2 === 0 ? collatzNumber/2 : collatzNumber*3+1;
    count++;
  }
  return count;
}

var loopingThroughCollatz = function(limit){
  var collatzNumber = limit,
      longestChain = [collatzNumber, 0],
      check;

  while (collatzNumber !== 1) {
    check = longestCollatzSequence(collatzNumber);
    if (check > longestChain[1]) longestChain = [collatzNumber, check];
    collatzNumber--;
  }
  return longestChain;
};

console.log(loopingThroughCollatz(1000000));
