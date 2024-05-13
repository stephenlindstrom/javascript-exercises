const reverseString = function(text) {
    let letters = text.split('');
    let textLength = text.length;
    const reverseLetters = [];
    
    for (let i=0; i<textLength; i++) {
        reverseLetters[i] = letters[textLength-i-1];
    }

    reverseText = reverseLetters.join('');
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
