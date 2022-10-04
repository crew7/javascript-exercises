const removeFromArray = function(dataOfArray, ...removeRequests) {
    for (const removeRequest of removeRequests){
        if (!dataOfArray.includes(removeRequest)) continue;
        let removeData = dataOfArray.indexOf(removeRequest);
        dataOfArray.splice(removeData, 1);
    }
        return dataOfArray;

};


// Do not edit below this line
module.exports = removeFromArray;
