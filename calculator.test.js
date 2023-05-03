const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 200;
    actual = sum(90, 110);
    expect(actual).toBe(expected);
    });

  test('can add two negative numbers', () => {
    expected = -100;
    actual = sum(-40, -60);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 50;
    actual = sum(50, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
