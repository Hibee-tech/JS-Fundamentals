const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    // Convert negative numbers to positive to match the expected output
    const count = Math.abs(x);

    // Use a loop to print "C is fun" x times
    for (let i = 0; i < count; i++) {
        console.log("C is fun");
    }
}




