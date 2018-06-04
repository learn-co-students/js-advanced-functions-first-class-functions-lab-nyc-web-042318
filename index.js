// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers){ return drivers.slice(0,2)});

const returnLastTwoDrivers = (function(drivers){ return drivers.slice(-2)});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) { return function (){return (num * num)}};

const fareDoubler = function(num){ return (num * 2)};
const fareTripler = function(num){ return (num * 3)};

const selectDifferentDrivers = function (arr, fn) { return fn(arr)};
