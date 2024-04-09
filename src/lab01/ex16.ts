/*

A positive integer is a prime if it is divisible by 1 and itself only. Write a function that check if a given number is prime.

*/

function isPrime(n: number):  boolean {
      let ndiv: number = 0;
      for (let i: number = 2; i < n; i++) {
          if (n % i == 0) {
            ndiv = ndiv + 1;
          }
        }
      if (ndiv == 0) {
        return true
      } 
      else {
        return false
      }
}

export {isPrime};