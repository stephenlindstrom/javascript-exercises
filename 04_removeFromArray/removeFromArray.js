const removeFromArray = function(inputArray, ...removeItemsArray) { 
    const outputArray = inputArray;
    const inputArrayLength = inputArray.length;
    const removeItemsArrayLength = removeItemsArray.length;

    for (let i=0; i<inputArrayLength; i++) {
        for (let j=0; j<removeItemsArrayLength; j++) {
            if (inputArray.includes(removeItemsArray[j])) {
                let index = outputArray.indexOf(removeItemsArray[j]);
                outputArray.splice(index, 1);
            }
        }
    }
    
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
