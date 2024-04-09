/*

Write the function calculateDistance(x1: number, y1: number, x2: number, y2: number):number to calculate the Euclidean distance between two points. Each point is defined by (x, y) coordinates. The distance can be computed using: dist=p(x2−x1)2 +(y2−y1)2.

*/

function calculateDistance(x1: number, x2: number, y1: number, y2: number): number {
    let distance = Math.sqrt( ( (x2 - x1) **2 ) + ((y2 - y1) **2));
    return distance;

}

export{calculateDistance};