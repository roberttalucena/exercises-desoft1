/* 


Write the function isLeapYear(year: number): boolean that given a year it computes if it is a leap year or not. A year is a leap year if the following conditions are satised:
1. The year is multiple of 400.
2. The year is a multiple of 4 and not a multiple of 100.

*/

function isLeapYear(year: number): boolean {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

export {isLeapYear};