/*
Write the function convertFahrenheitToCelsius(tf: number):number to convert temperature from Fahrenheit(TF ) to Celsius(TC ) degree: TC = (TF −32)∗5/9.

*/

function convertFahrenheitToCelsius(tf: number): number {

    let tc = (tf - 32) * (5 / 9);
    return tc;

}

export{convertFahrenheitToCelsius};