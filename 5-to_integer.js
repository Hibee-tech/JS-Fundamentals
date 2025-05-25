// Get the first argument from command line
const firstArg = process.argv[2];

// Convert it to an integer using Number() and check if it's valid
const num = parseInt(firstArg);

// Print the output
if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
