// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (fare) { return num * fare };
}

function fareDoubler(fare) {
  return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(array, func) {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array)
  } else if (func === returnLastTwoDrivers) {
    return returnLastTwoDrivers(array)
  }
}
