/**
 * Script that checks the number of command-line arguments provided by the user.
 * * In Node.js, process.argv always contains at least two elements:
 * [0] -> Path to the Node.js executable
 * [1] -> Path to the script file
 * The user-provided arguments start at index 2.
 */

// Calculate the number of actual user arguments by subtracting the first two mandatory elements.
const argumentCount = process.argv.length - 2;

// Check the argument count and print the appropriate message.
if (argumentCount === 0) {
    console.log("No argument");
} else if (argumentCount === 1) {
    console.log("Argument found");
} else {
    // This covers all cases where argumentCount is 2 or more.
    console.log("Arguments found");
}