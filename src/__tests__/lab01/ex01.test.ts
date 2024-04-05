import {convertTimetoSeconds} from '../../lab01/ex01'


describe('Testing the convert time to seconds function', () => {
    test(' 10 hours, 20 minutes, 30 seconds: pass', () => {
        //Arrange
        let hours: number = 10;
        let minutes: number = 20;
        let seconds: number = 30;
        let expected: number = 37230;
        //Act
        let result = convertTimetoSeconds(hours, minutes, seconds);
        //Assert
        expect(result).toBe(expected);
    });
});
