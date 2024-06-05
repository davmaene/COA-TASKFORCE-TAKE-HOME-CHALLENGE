const stringTransform = ({ inputString }) => {
    const length = str.length;

    // Function to reverse the string
    const reverseString = (s) => {
        return s.split('').reverse().join('');
    }
    // Function to replace each character with its ASCII code
    const replaceEachCharWithItsAscii = (s) => {
        return s.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (length % 15 === 0) {
        // whene the lenght of the string is devisible by 3 and 5 we perform both operations
        return replaceEachCharWithItsAscii(reverseString(str));
    } else if (length % 5 === 0) {
        // in this case we replace each character with its ASCII code 
        return replaceEachCharWithItsAscii(str);
    } else if (length % 3 === 0) {
        // Reverse the string
        return reverseString(str);
    } else {
        // If none of the conditions are met, we return the original string that was passed throught the function
        return str;
    }
}

const str = "DavidMaene";
const result = stringTransform({
    inputString: str
})

console.log('====================================');
console.log(result);
console.log('====================================');