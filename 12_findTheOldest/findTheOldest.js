const findTheOldest = function(arrayObj) {
    oldest = arrayObj.reduce( function(accumulatorObj, currentObj) {
        if (!accumulatorObj.yearOfDeath) {
            currentYear = new Date().getFullYear();
            accumulatorObj.yearOfDeath = currentYear;
        }

		if (currentObj.yearOfDeath - currentObj.yearOfBirth > accumulatorObj.yearOfDeath - accumulatorObj.yearOfBirth) {
			accumulatorObj = currentObj;
		}

        return accumulatorObj;
	} )
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
