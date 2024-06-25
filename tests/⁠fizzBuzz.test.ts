import { fizzBuzz, FizzBuzzConfig, defaultConfig } from '../src/fizzBuzz';

test(`returns number as string with default config`, () => {
    expect(fizzBuzz(1)).toBe('1');
});

test(`returns ${defaultConfig.fizzString} for multiples of ${defaultConfig.fizzValue}`, () => {
    expect(fizzBuzz(defaultConfig.fizzValue)).toBe(defaultConfig.fizzString);
});

test(`returns ${defaultConfig.buzzString} for multiples of ${defaultConfig.buzzValue}`, () => {
    expect(fizzBuzz(defaultConfig.buzzValue)).toBe(defaultConfig.buzzString);
});

test(`returns ${defaultConfig.fizzString}${defaultConfig.buzzString} for multiples of ${defaultConfig.fizzValue} and ${defaultConfig.buzzValue}`, () => {
    expect(fizzBuzz(defaultConfig.fizzValue * defaultConfig.buzzValue)).toBe(`${defaultConfig.fizzString}${defaultConfig.buzzString}`);
});