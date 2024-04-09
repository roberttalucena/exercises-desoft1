/*

A positive integer is called a deficient number if the sum of all its proper divisors is less than its value. For example, 10 is a decient number because 1 + 2 + 5 < 10 while 12 is not because 1 + 2 + 3 + 4 + 6 > 12.
Write a function to check whether a given number is deficient.

*/

function deficienteNumber(n: number): boolean {
  let somaDiv = 0
  for (let i = n; i < n; i++) {
     if (n % i == 0) {
        somaDiv = somaDiv + i;
    }
  }
  if (somaDiv < n) {
      return true;
  }
  else 
      return false;
}

export {deficienteNumber};