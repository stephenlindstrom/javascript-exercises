const sumAll = function(value1, value2) {
    let sum = 0;
    let startValue;
    let endValue;
    
    if (value1 > value2) {
        startValue = value2;
        endValue = value1;
    }
    else {
        startValue = value1;
        endValue = value2;
    }

    if (value1 < 0 || value2 < 0) {
        return 'ERROR';
    }

    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        return 'ERROR';
    }

    for (let i=startValue; i <= endValue; i++) {
        sum = sum + i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
