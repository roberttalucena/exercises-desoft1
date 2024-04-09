
import { convertTimetoSeconds } from './lab01/ex01'
import { convertFahrenheitToCelsius } from './lab01/ex02';
import { calculateCircleArea } from './lab01/ex03';
import { calculateHypotenuse } from './lab01/ex04';
import { calculateDistance } from './lab01/ex05';
import { isEven } from './lab01/ex06';
import { maximumOfThree } from './lab01/ex07';
import { isTriangle } from './lab01/ex08';
import { isLeapYear } from './lab01/ex09';
import { fibonacci } from './lab01/ex12';
import { factorial } from './lab01/ex13';
import { perfectNumber } from './lab01/ex14';
import { deficientNumber } from './lab01/ex15';
import { isPrime } from './lab01/ex16';


let message: string = 'ISEP-DESOFT 1  Lab exercises';
console.log(message);


let seconds = convertTimetoSeconds(10, 20, 30);
console.log("Seconds: " + seconds);


let tc = convertFahrenheitToCelsius(50);
console.log("Temperature Celsius: " + tc);


let area = calculateCircleArea(100);
console.log("Circle area: " + area);


let hypotenuse = calculateHypotenuse(20, 40);
console.log("Hypotenuse: " + hypotenuse);


let distance = calculateDistance(2,4,6,8);
console.log("Distance: " + distance);


let iseven = isEven(555);
console.log("Is the number even? ", iseven);


let maximum = maximumOfThree(20, 40, 60);
console.log("The maximum is: " + maximum);


let istriangle = isTriangle(2,4,6,8,10,12);
console.log("Is it a triangle? ", istriangle);


let isleapyear = isLeapYear(2024);
console.log("Is it a leap year?", isleapyear);


let Fibonacci = fibonacci(8);
console.log("The fibonacci sequence is: "+ Fibonacci);

let Factorial = factorial(6);
console.log("OThe factorial is: " + Factorial);

let perfectnumber = perfectNumber(25);
console.log("Is the number perfect?", perfectnumber);


let deficientnumber = deficientNumber(10);
console.log("Is the number deficient? ", deficientnumber);


let isprime = isPrime(11);
console.log("Is the number prime?", isprime);


