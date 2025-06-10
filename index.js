// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (arr) => [arr[0], arr[1]];
const returnLastTwoDrivers = (arr) => [arr.at(-2), arr[arr.length - 1]];
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(num){
    return (fare) => {
        return fare * num;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (arr, fn) {
    let result = fn(arr);
    return result
};

returnFirstTwoDrivers(drivers);
returnLastTwoDrivers(drivers);
selectingDrivers[0],
selectingDrivers[1];
selectingDrivers[0](drivers);
selectingDrivers[1](drivers);
fareDoubler(10);
fareTripler(12);
selectDifferentDrivers(drivers, returnFirstTwoDrivers);
selectDifferentDrivers(drivers, returnLastTwoDrivers);