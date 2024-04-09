/* 

The Fibonacci sequence is a series where the next term is the sum of previous two terms. The first two terms of the Fibonacci sequence is 0 followed by 1.
Write a function that given a number computes its Fibonacci term.

*/

function fibonacci(n: number): Number {
    let fib = [0,1];
    for (let i= 2; i < n; i++) {
      fib[n] = fib[n - 1]+ fib[n + 2]
    }
    return fib[n]
}

export {fibonacci};
