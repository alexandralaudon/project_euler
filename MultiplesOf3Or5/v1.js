//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

// create a variable called ceiling = 1000;
// create a loop that iterates through all ceiling numbers between 1 and 1000
// create if statements that appends to the array if divisible by 3 or 5
//
// create a sum function that takes an array and adds up all values together


// FIRST TRY
var multiplesOfThreeOrFive = function(ceiling){
  var result = [];
  for (var i = 0; i < ceiling; i++){
    if (i%3===0 || i%5===0) result.push(i);
  }
  return result.reduce(function(a,b){
    return a+b;
  });
}

console.log(multiplesOfThreeOrFive(1000));
