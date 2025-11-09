/**
 * Script that prints a square of 'X' characters, where the size is 
 * determined by the first command-line argument.
 *
 * Constraints:
 * - No 'var'.
 * - Must use a loop.
 * - Must use 'console.log' for all output.
 */

// 1. Get the argument and convert it to an integer.
const inputArgument = process.argv[2];
// Using Math.floor ensures we handle floating-point numbers correctly by taking the integer size.
const size = Math.floor(parseInt(inputArgument));

// 2. Conditional check for missing or non-integer input.
if (isNaN(size)) {
    console.log("Missing size");
} else if (size <= 0) {
    // Handle invalid size like 0 or negative numbers gracefully.
    console.log("Size must be a positive integer.");
} else {
    // 3. Nested loop structure to print the square.

    // Outer loop controls the rows (height of the square)
    let rowCount = 0;
    while (rowCount < size) {
        // Inner loop builds the string for the current row (width of the square)
        let rowString = "";
        let colCount = 0;
        
        while (colCount < size) {
            rowString += "X";
            colCount++;
        }

        // Print the complete row string
        console.log(rowString);
        
        rowCount++;
    }
}
```
eof

### Example Output (If run with `node square.js 4`)

```
XXXX
XXXX
XXXX
XXXX