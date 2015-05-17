//2520 is the smallest number that can be divided by each of the
//numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the
//numbers from 1 to 20?

var smallestMultiple = function(){
  var i = 1;
  while(i < 1000000000){
    if (multiplesTest(i)) return i;
    i++;
  }
  return "DNE under 1 trillion";
}

var multiplesTest = function(number){
  for(var i = 1; i <= 20; i++){
    if (number%i!==0) return false;
  }
  return true;
};

console.log(smallestMultiple());

// create a while loop that always evaluates to true, except with a break if
// the number created passes the test.

// create a loop where i is the total number of iterations it must go through
// check
