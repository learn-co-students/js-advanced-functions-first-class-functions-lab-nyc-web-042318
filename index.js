// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(value){
  return function (nv){
    return value*nv
  }
}

function fareDoubler(value){
  return value*2
}


function fareTripler(value){
  return value*3
}

const selectDifferentDrivers = function(drivers, fn){
  return  fn(drivers)
}
