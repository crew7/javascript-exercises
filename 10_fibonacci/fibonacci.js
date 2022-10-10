const fibonacci = function(myInput) {
    let myArray = [1, 1, 2, 3, 5, 8]
	let latestIndexReference = 5
	let numberCounter = 0

    if (myInput > 6) {
            
        while (myArray.length <= myInput) {

            if (numberCounter == myArray[latestIndexReference] + myArray[latestIndexReference - 1]) {
                myArray.push(numberCounter);
                ++latestIndexReference;
                numberCounter = 0;
            }

            ++numberCounter;
            
        }
            
    } else if (myInput < 0) {
        return 'OOPS'
    }
	
	return myArray[myInput - 1]

};

console.log(fibonacci(7));


// Do not edit below this line
module.exports = fibonacci;
