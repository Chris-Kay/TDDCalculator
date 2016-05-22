var main = require('../src/main');

describe("description", function () {
  it("it handles an empty string", function () {
    var emptyString = '';
    expect(main.add(emptyString)).toBe(0);
  });

  it("it handles an a single number", function () {
    var number1 = '1';
    expect(main.add(number1)).toBe(1);
  });

  it("it handles an a multiple numbers", function () {
    var multipleNumbers = '1,2';
    expect(main.add(multipleNumbers)).toBe(3);
  });

  it("it handles an new line in numbers", function () {
    var numberWithNewLine = '1\n2,3';
    expect(main.add(numberWithNewLine)).toBe(6);
  });
});
