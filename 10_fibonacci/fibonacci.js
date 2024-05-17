const fibonacci = function(index) {
    let leftPointer = 1;
    let rightPointer = 1;

    if (index == 0) {
        return 0;
    }

    if (index < 0) {
        return 'OOPS';
    }

    for (let i=2; i<index; i++) {
        let sum = leftPointer + rightPointer;
        leftPointer = rightPointer;
        rightPointer = sum;
    }

    return rightPointer;
};

// Do not edit below this line
module.exports = fibonacci;
