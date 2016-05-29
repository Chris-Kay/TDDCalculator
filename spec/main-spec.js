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
