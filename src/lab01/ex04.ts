/*

Write the function calculateHypotenuse(a: number, b: number): number to calculate the hypotenuse of a right triangle. h = p(a2 + b2);

*/

function calculateHypotenuse(a: number, b: number): number {
    let hypotenuse = Math.sqrt((a **2) + (b **2));
    return hypotenuse;

}

export{calculateHypotenuse};