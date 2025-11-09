/**
 * Script that defines a function to add two numbers and then calculates 
 * the sum of the first two command-line arguments.
 *
 * Constraints:
 * - No 'var'.
 * - Must use a function with prototype: function add(a, b)
 */

// 1. Function Definition: add(a, b)
// This function takes two numbers, a and b, and returns their sum.
function add(a, b) {
    return a + b;
}

// 2. Get Arguments and Convert to Integers
// Arguments are retrieved from process.argv[2] and process.argv[3].
// We use 'const' (no 'var') and parseInt() to ensure they are treated as numbers.
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// 3. Calculate and Print the Result
// Call the defined 'add' function and use console.log to print the result.
// Note: If an argument is missing or non-numeric, parseInt will result in NaN,
// and the addition will result in NaN, which will be printed.
const result = add(num1, num2);

console.log(result);