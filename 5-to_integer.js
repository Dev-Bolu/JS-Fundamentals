/**
 * Script that checks if the first command-line argument can be converted to an integer.
 * This script adheres to the constraints: no 'var', no 'try/catch'.
 *
 * The first user argument is at index 2 (process.argv[2]).
 */

// 1. Get the first argument from the command line (may be undefined if not provided).
const firstArgument = process.argv[2];

// 2. Attempt to convert the argument to an integer.
// - If the argument is "123", convertedInt will be 123.
// - If the argument is "hello", convertedInt will be NaN.
// - If the argument is undefined (no argument passed), convertedInt will be NaN.
const convertedInt = parseInt(firstArgument);

// 3. Check if the result of the conversion is NaN (Not a Number).
// The !isNaN() check handles cases where the argument is missing OR is a non-numeric string.
if (!isNaN(convertedInt)) {
    // If it's NOT NaN, the conversion succeeded.
    console.log(`My number: ${convertedInt}`);
} else {
    // If it IS NaN, the argument was not a valid integer input.
    console.log("Not a number");
}
