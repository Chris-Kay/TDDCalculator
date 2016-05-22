function add(numberString) {
  var sum = 0,
  seperator = [',', '\n']
  if(numberString === '') {
    return sum;
  }


  var numbers = numberString.split(new RegExp(seperator.join('|'), 'g'));
    numbers.forEach(function(number) {
      sum += parseInt(number);
    });

  return sum;
}

module.exports = {
  add: add
}
