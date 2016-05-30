var main = require('../src/main');

describe("Basics", function () {
  it("it handles an empty string", function () {
    var emptyString = '';
    expect(main.add(emptyString)).toBe(0);
  });

  it("it handles an a single number", function () {
    var number1 = '1';
    expect(main.add(number1)).toBe(1);
  });

  it("it handles an a single number", function () {
    var number = '1,2';
    expect(main.add(number)).toBe(3);
  });

  it("it handles an a single number", function () {
    var number = '1\n2';
    expect(main.add(number)).toBe(3);
  });
});

describe("Multiple deliminators", function () {
  it("should support multiple deliminators", function () {
    var number = '//;\n1;2';
    expect(main.add(number)).toBe(3);
  });
});

describe("Negative numbers throw errors", function () {
  it("negative number is passed in with normal deliminator", function () {
    var number = '1,-2';
    expect(function() {
      main.add(number)
    }).toThrow(new Error('Negative numbers not allowed: -2'));
  });

  it(" multiple negative numbers is passed in with normal deliminator", function () {
    var number = '1,-2,-3';
    expect(function() {
      main.add(number)
    }).toThrow(new Error('Negative numbers not allowed: -2,-3'));
  });

  it("negative number is passed in with custom deliminator", function () {
    var number = '//;\n1;-2';
    expect(function() {
      main.add(number)
    }).toThrow(new Error('Negative numbers not allowed: -2'));
  });
});

describe("Big numbers", function () {
  it("ignores numbers larger than 1000", function () {
    var number = '//;\n1001;2';
    expect(main.add(number)).toBe(2);
  });

  it("includes the number 1000", function () {
    var number = '//;\n1000;2';
    expect(main.add(number)).toBe(1002);
  });
});
