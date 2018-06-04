// Code your solution in this file!
const returnFirstTwoDrivers =  function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier=function(n) {
  return function(num) {
    return num*n;
  };
}

const fareDoubler =  function (n) {

  return createFareMultiplier(2)(n);
}

const fareTripler = function (n) {
  return createFareMultiplier(3)(n);
}

function selectDifferentDrivers(drivers, f) {
  return f(drivers);
}
