// Helper function to reverse a string
const reverseString = (string) => [...string].reverse().join('');

// Helper function to shorten a string to fifty characters
const shortenString = (string) => {
    return string.length > 50 ? string.substring(0, 50) + "..." : string;
}

module.exports = {reverseString, shortenString};