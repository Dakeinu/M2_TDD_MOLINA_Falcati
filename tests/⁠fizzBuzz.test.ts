import { fizzBuzz } from '../src/fizzBuzz';

test('returns number as string', () => {
  expect(fizzBuzz(1)).toBe('1');
});

test('returns Fizz for multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
});
