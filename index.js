// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2)
}

var selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers)

const createFareMultiplier = function (num) {
  return function(multiplier) {
    return multiplier * num
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array,f) {
  return f(array)
}
