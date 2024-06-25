export function fizzBuzz(number: number): string {
    if (number % 3 === 0) {
      return 'Fizz';
    }
    return number.toString();
  }