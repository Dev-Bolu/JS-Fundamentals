/**
 * Script that prints "C is fun" X times, where X is the first command-line argument.
 *
 * Constraints:
 * - No 'var', no 'try/catch'.
 * - Max two 'console.log' calls (one for error, one in the loop).
 * - Must use a loop.
 */

// 1. Get the first argument and attempt to convert it to an integer.
const inputArgument = process.argv[2];
const x = parseInt(inputArgument);

// 2. Conditional check for missing or non-integer input.
// We check if the conversion failed (isNaN) OR if no argument was passed (inputArgument === undefined).
// Since the prompt specifies printing "Missing number of occurrences" if the argument *can't be converted to an integer*, 
// checking !isNaN(x) is sufficient, as parseInt(undefined) results in NaN.
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    // 3. Loop: If the conversion succeeded, print "C is fun" x times.
    // We use a temporary variable 'i' initialized to 0 and a 'while' loop.
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
}