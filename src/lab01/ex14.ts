/*

A perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself.
Examples, the first perfect number is 6. Its proper divisors are 1, 2, and 3,and1+2+3=6. The next perfect number is 28= 1+2+4+7+14. Write a function to check whether a given number is perfect.

*/

function perfectNumber(n: number): boolean {
  let somaDiv = 0;
  for (let i = 1; i < n; i = i + 1) {
      if (n % i == 0) {
        somaDiv = somaDiv + 1;
      }
  }
  if (somaDiv == n) {
      return true;
  }
  else {
      return false;
  }
}

export {perfectNumber};