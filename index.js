// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array) {
  return array.slice(array.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) { return multiplier * fare; }
}

const fareDoubler = function (fare) { return createFareMultiplier(2)(fare); }

const fareTripler = function (fare) { return createFareMultiplier(3)(fare); }

const selectDifferentDrivers = function (arrayOfDrivers, func) {return func(arrayOfDrivers);}
