import { fizzBuzz } from '../src/fizzBuzz';

test('returns number as string', () => {
  expect(fizzBuzz(1)).toBe('1');
});

test('returns Fizz for multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
});

test('returns Buzz for multiples of 5', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
});

test('returns FizzBuzz for multiples of 3 and 5', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});