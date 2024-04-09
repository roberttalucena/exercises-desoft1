/* 


Write the function isTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean that given coordi- nates of three points in a plane P1, P2 and P3, check if they form a valid triangle. A triangle is valid if sum of its two sides is greater than the third side.

*/

function isTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean {
    let side1 = Math.sqrt( ( (x2 - x1) **2 ) + ((y2 - y1) **2));
    let side2 = Math.sqrt( ( (x2 - x3) **2 ) + ((y2 - y3) **2));
    let side3 = Math.sqrt( ( (x3 - x1) **2 ) + ((y3 - y1) **2));
    if (side1 + side2 > side3) {
      if (side2 + side3 > side1) {
        if (side3 + side1 > side2) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
}

export {isTriangle};
