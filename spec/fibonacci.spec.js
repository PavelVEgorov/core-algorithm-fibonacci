const {iterativeFibonacci, } = require('../fibonacci.index');

test('iterativeFibonacci', () => {
  expect(iterativeFibonacci(0)).toBe(1);
  expect(iterativeFibonacci(1)).toBe(1);
  expect(iterativeFibonacci(2)).toBe(1);
  expect(iterativeFibonacci(3)).toBe(2);
  expect(iterativeFibonacci(4)).toBe(3);
  expect(iterativeFibonacci(5)).toBe(5);
  expect(iterativeFibonacci(6)).toBe(8);
  expect(iterativeFibonacci(7)).toBe(13);
  expect(iterativeFibonacci(8)).toBe(21);
  expect(iterativeFibonacci(9)).toBe(34);
  expect(iterativeFibonacci(10)).toBe(55);
})
