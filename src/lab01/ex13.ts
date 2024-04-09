/* 

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 1 ifn=0
n!= (n−1)!∗n ifn>0. Write a function that computes the factorial of a given number.

*/

function factorial(n: number): number {
    let factorial: number = 1
    for (let i = 1; i <= n; i = i + 1) {
        factorial = factorial * i;
    }
    return factorial;
}

export {factorial};