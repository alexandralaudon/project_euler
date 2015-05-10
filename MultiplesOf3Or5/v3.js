
var multiples = function(num1, num2){
  return function(ceiling){
    var ceilingArray = createArray(ceiling),
        multiplesFilter = function(elem){return (elem%num1===0 || elem%num2===0);},
        multiplesReduce = function(sum, add){return sum + add;};

    return ceilingArray.filter(multiplesFilter).reduce(multiplesReduce);
  };
};

var createArray = function(limit){
  var array = [];
  for (var i = 1; i < limit; i++){
    array.push(i);
  }
  return array;
};


var multiplesOf3Or5 = multiples(3,5);
console.log(multiplesOf3Or5(1000));
