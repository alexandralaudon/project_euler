// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

var countingSundays = function(firstDate, lastDate){
  var countSun = 0,
      date = firstDate,
      year = date.getFullYear();

  while (year <= lastDate.getFullYear()){
    for (var mon = 0; mon < 12 ; mon ++){
      date.setMonth(mon);
      if (date.getDay() == 0) countSun++;
    }
    year++;
    date.setFullYear(year);
  }

  return countSun;

};

var beginDate = new Date('January 1, 1901');
var endDate = new Date('December 31, 2000');

console.log(countingSundays(beginDate, endDate));
