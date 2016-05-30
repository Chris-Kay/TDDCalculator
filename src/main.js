function add(numberString) {
  var sum = 0;
  var number = 0;
  var negativeNumbers = [];

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
    if(numberArray[i] < 0) {
      negativeNumbers.push(numberArray[i]);
    }

    sum += parseInt(numberArray[i]);
  }

  if(negativeNumbers.length > 0) {
    throw Error('Negative numbers not allowed: ' + negativeNumbers);
  }

  return sum;
}

function hasCustomDeliminator(numberString) {
    return numberString.match(/^\/\//);
}

module.exports = {
  add: add
}
