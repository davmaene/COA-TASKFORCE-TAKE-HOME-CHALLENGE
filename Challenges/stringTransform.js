const stringTransform = ({ inputString }) => {
    const length = inputString.length;

    // Function to reverse the string
    const reverseString = (s) => {
        return String(s).split('').reverse().join('');
    }
    // Function to replace each character with its ASCII code
    const replaceEachCharWithItsAscii = (s) => {
        return String(s).split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (length % 15 === 0) {
        // whene the lenght of the string is devisible by 3 and 5 we perform both operations
        const rvrs = reverseString(inputString)// getting the reversed string
        return replaceEachCharWithItsAscii(rvrs);
    } else if (length % 5 === 0) {
        // in this case we replace each character with its ASCII code 
        return replaceEachCharWithItsAscii(inputString);
    } else if (length % 3 === 0) {
        // Reverse the string
        return reverseString(inputString);
    } else {
        // If none of the conditions are met, we return the original string that was passed throught the function
        return inputString;
    }
}

const str = "DavidMaene";
const result = stringTransform({
    inputString: str
})

console.log('====================================');
console.log(result);
console.log('====================================');