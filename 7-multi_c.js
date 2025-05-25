const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    // Convert negative numbers to positive using Math.abs(x)
    const count = Math.abs(x);

    // Loop to print "C is fun" count times
    for (let i = 0; i < count; i++) {
        console.log("C is fun");
    }
}




