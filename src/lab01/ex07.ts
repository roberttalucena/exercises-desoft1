/* 

Write the function maximumOfThree(n1: number, n2: number, n3: number): number to compute the maximum of a given three numbers.

*/

function maximumOfThree(n1: number, n2: number, n3: number): number {
  if(n1 >= n2) {
      if(n1 >= n3) {
        return n1
      }
      else {
        return n3;
      }
  }
  else if (n2 >= n3) {
      return n2;
  }
  else {
    return n3;
  }
}

export{maximumOfThree};