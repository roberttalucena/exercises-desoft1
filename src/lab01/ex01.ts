/*
Write the function convertTimeToSeconds(hours: number, minutes:number, seconds:number):number that given time in hours, minutes and seconds convert it to seconds.

*/

function convertTimetoSeconds(hours: number, minutes: number, seconds: number): number {

    let sec: number = hours * 3600 + minutes * 60 + seconds;
    return sec;
}


export {convertTimetoSeconds};
