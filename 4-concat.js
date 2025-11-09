/**
 * Script that prints the first two command-line arguments in the format "arg1 is arg2".
 * This script adheres to the constraint of not using the 'var' keyword.
 *
 * The first user argument is at index 2 (process.argv[2]).
 * The second user argument is at index 3 (process.argv[3]).
 */

// Use 'const' to declare variables
const firstArgument = process.argv[2];
const secondArgument = process.argv[3];

// Use a template literal (backticks) for clean string interpolation
// The output will be in the format: "arg1 is arg2"
console.log(`${firstArgument} is ${secondArgument}`);