/**
 * Script that prints three lines using an array and a loop.
 * Constraints:
 * - No 'var', no 'if/else', no 'length'.
 * - Must use a loop.
 * - Must use only one console.log.
 */

// 1. Define the array of strings using 'const' (no 'var')
const messages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

// 2. Initialize the result string
let output = "";

// 3. Use a for...of loop to iterate over the array (satisfying the loop constraint)
// Since we can't use 'length' or a traditional for loop counter (i=0; i < messages.length; i++), 
// the for...of loop is the most compliant way to iterate without those constraints.
for (const message of messages) {
    // Append the message and a newline character to the output string.
    output += message + "\n";
}

// 4. Print the entire formatted string using a single console.log() call.
// The .trimEnd() method removes the trailing newline character, ensuring the output 
// doesn't have an unnecessary blank line at the end, although keeping it would also meet the requirement.
console.log(output.trimEnd());