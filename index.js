// Code your solution in this file!
const returnFirstTwoDrivers =(drivers) => {
    return drivers.slice(0, 2)
}


const returnLastTwoDriver =(drivers) => {
    return drivers.slice(drivers.length - 2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDriver]

const createFareMultiplier =(number) =>
    function higherOrderDumbDumb(fare) {
        return fare * number
}

const fareDoubler =(fare) => createFareMultiplier(2)(fare)
const fareTripler =(fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(drivers, selectDrivers) {
    return selectDrivers(drivers)
}

