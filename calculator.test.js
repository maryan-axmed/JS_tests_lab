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
  test('can divide small numbers', () => {
    expected = 2;
    actual = divide(8, 4);
    expect(actual).toBe(expected);
  });

  test('can divide large numbers', () => {
    expected = 5;
    actual = divide(1000, 200);
    expect(actual).toBe(expected);
  });

  test('can divide negative numbers', () => {
    expected = 5;
    actual = divide(-25, -5);
    expect(actual).toBe(expected);
  });

  test('can divide by zero', () => {
    expected = Infinity;
    actual = divide(200, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can modulus two small numbers', () => {
    expected = 0;
    actual = modulus(25, 5);
    expect(actual).toBe(expected);
  });

  test('can modulus two large numbers', () => {
    expected = 0;
    actual = modulus(1000, 100);
    expect(actual).toBe(expected);
  });

  // can i even test the next one??
  // test('can modulus two negative numbers', () => {
  //   expected = 0;
  //   actual = modulus(-25, -5);
  //   expect(actual).toBe(expected);
  // });
});

describe('even', () => {
  test('test small number', () => {
    expected = true;
    actual = even(6);
    expect(actual).toBe(expected);
  });

  test('test large number', () => {
    expected = true;
    actual = even(2456786);
    expect(actual).toBe(expected);
  });

  test('test false', () => {
    expected = false;
    actual = even(24567);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {
  test('test small number', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });

  test('test large number', () => {
    expected = true;
    actual = odd(24567865);
    expect(actual).toBe(expected);
  });

  test('test false', () => {
    expected = false;
    actual = odd(2456);
    expect(actual).toBe(expected);
  });
});
