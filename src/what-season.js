module.exports = function getSeason(date) {
  if ( arguments.length == 0 ) {
    return 'Unable to determine the time of year!';
  }
  if ( Object.prototype.toString.call(date) != "[object Date]" ) {
    throw "Error";
  }
  let month = date.getMonth();
  let season;  
  switch(true) {
    case ( month == 11 || (month <= 1 && month >= 0)):
      season = 'winter';
      break;
    case ( month >= 2 && month <= 4 ):
      season = 'spring';
      break;
    case ( month >= 5 && month <= 7 ):
      season = 'summer';
      break;
    case ( month >= 8 && month <= 10 ):
      season = 'autumn';
      break;
  }
  return season;
};