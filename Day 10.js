// Program to count the number of vowels in a string

// Defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // Initialize count
    let count = 0;

    // Loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // Return number of vowels
    return count
}

// Take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);