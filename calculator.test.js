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
  test('can subtract two small numbers', () => {
      expected = 10;
      actual = subtract(30, 20);
      expect(actual).toBe(expected);
  });

  test('can substract two large numbers', () => {
      expected = 150;
      actual = subtract(400, 250);
      expect(actual).toBe(expected);
  });

  test('can subract two negative numbers', () => {
    expected = -50;
    actual = subtract(-100, -50)
    expect(actual).toBe(expected);
  });

  test('can subract zero', () => {
    expected = 100;
    actual = subtract(100, 0)
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply small numbers', () =>{
    expected = 30;
    actual = multiply(15, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply large numbers', () =>{
    expected = 250;
    actual = multiply(25, 10);
    expect(actual).toBe(expected);
  });

  test('can multiply negative numbers', () =>{
    expected = 150;
    actual = multiply(-15, -10);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () =>{
    expected = 0;
    actual = multiply(15, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
