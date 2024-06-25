export interface FizzBuzzConfig {
    fizzValue: number;
    buzzValue: number;
    fizzString: string;
    buzzString: string;
}

export const defaultConfig: FizzBuzzConfig = {
    fizzValue: 3,
    buzzValue: 5,
    fizzString: 'Fizz',
    buzzString: 'Buzz'
};

export function fizzBuzz(number: number, config: FizzBuzzConfig = defaultConfig): string {
    const { fizzValue, buzzValue, fizzString, buzzString } = config;
    const fizzBuzzString = fizzString + buzzString;

    if (number % (fizzValue * buzzValue) === 0) {
        return fizzBuzzString;
    }
    if (number % buzzValue === 0) {
        return buzzString;
    }
    if (number % fizzValue === 0) {
        return fizzString;
    }
    return number.toString();
}