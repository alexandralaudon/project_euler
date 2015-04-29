// SECOND TRY
var multiples = function(variable1, variable2){
  return function(ceiling){
    var result = [];
    for (var i = 0; i < ceiling; i++){
      if (i%variable1===0 || i%variable2===0) result.push(i);
  	}
  	return result.reduce(function(sum,add){
      return sum + add;
  	}, 0);
  };
};

var multiplesOf3Or5 = multiples(3,5);
console.log(multiplesOf3Or5(1000));
