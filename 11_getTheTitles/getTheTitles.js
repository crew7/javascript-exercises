const getTheTitles = function(objArray) {
    bookArray = []
    objArray.map( function(obj) {
        for (key in obj) {
            if (key == 'title') bookArray.push(obj[key]);
        }
    } )
    
    return bookArray;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
