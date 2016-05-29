function add(numberString) {
  var sum = 0;
  var number = 0;
  if(numberString === '') {
    return sum;
  }

  if(hasCustomDeliminator(numberString)) {
    var deliminator = (numberString.charAt(2));
    var numbers = numberString.split(/\n/)[1];
    numberArray = numbers.split(deliminator);
  } else {
    numberArray =  numberString.split(/\n|\,/);
  }

  for(var i = 0; i < numberArray.length; i ++) {
    sum += parseInt(numberArray[i]);
  }

  return sum;
}

function hasCustomDeliminator(numberString) {
    return numberString.match(/^\/\//);
}

module.exports = {
  add: add
}
