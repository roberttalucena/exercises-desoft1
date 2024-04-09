/*

Write the function calculateCircleArea(radius: number):number to calculate the area of a circle. The circle area can be computed using:area = PI ∗ radius2.

*/

function calculateCircleArea(radius: number): number {
  
    let area: number = Math.PI * (radius ** 2);
    return area;
}

export {calculateCircleArea};
