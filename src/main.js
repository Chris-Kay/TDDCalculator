function add(numberString) {
  var sum = 0;
  var number = 0;
  if(numberString === '') {
    return sum;
  }

  numberArray =  numberString.split(/\n|\,/);

  for(var i = 0; i < numberArray.length; i ++) {
    sum += parseInt(numberArray[i]);
  }

  return sum;
}

module.exports = {
  add: add
}
