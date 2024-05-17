const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwyxz0123456789';

    function alphaNumeric(value) {
        return alphanumerical.includes(value);
    }

    const stringAlphaNum = string.toLowerCase().split('').filter(alphaNumeric).join('');

    const reverseStringAlphaNum = stringAlphaNum.split('').reverse().join('')

    if (stringAlphaNum === reverseStringAlphaNum) {
        return true;
    } 

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
