// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


// First off, find each instance where a*a + b*b = c*c.
// count where a + b + c = 1000; If found return a*b*c.
// a must be less than b, and b must be less than c.
// the loop to find must be 998 or smaller since a + b + c must equal 1000.

var pythagoreanTriplet = function(input){
  for (var a = 3; a < input-2 ; a++){
    for (var b = a+1; b < input-2 ; b++){
      for (var c = b+1; c < input-2 ; c++){
        if ((a*a + b*b === c*c) && (a + b + c === input)){
          return a*b*c;
        }
      }
    }
  }
  return "This does not work";
};

console.log(pythagoreanTriplet(1000));
