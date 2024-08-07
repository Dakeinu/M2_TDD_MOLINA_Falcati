import { add } from "../src/calculator";

describe('stringCalculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('should handle an unknown number of arguments', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  test('should handle newlines as separators', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('should throw an error for invalid input like "2,\n3"', () => {
    expect(() => {
      add('2,\n3');
    }).toThrow('Invalid input: consecutive separators');
  });

  test('should throw an error for input ending with a separator', () => {
    expect(() => {
      add('1,2,');
    }).toThrow('Invalid input: separator at the end');
  });

  test('should handle different delimiters', () => {
    expect(add('//;\n1;3')).toBe(4);
    expect(add('//|\n1|2|3')).toBe(6);
    expect(add('//sep\n2sep5')).toBe(7);
  });

  test('should throw an error for invalid input with different delimiter', () => {
    expect(() => {
      add('//|\n1|2,3');
    }).toThrow("'|' expected but ',' found at position 3.");
  });
});