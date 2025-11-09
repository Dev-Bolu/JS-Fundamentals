/**
 * Script that prints the first command-line argument.
 * Prints "No argument" if no argument is supplied.
 *
 * Constraints: No 'var' or 'length' allowed.
 */

// The first user-supplied argument is always at index 2 in the process.argv array.
// If no argument is provided, process.argv[2] will be 'undefined'.
const firstArgument = process.argv[2];

// Use an explicit check against 'undefined' to determine if an argument exists.
if (firstArgument === undefined) {
    console.log("No argument");
} else {
    // Print the argument if it was found.
    console.log(firstArgument);
}