const x = parseInt(process.argv[2]);

// Check if x is a valid integer
if (isNaN(x) || x < 1) {
    console.log("Missing number of occurrences");
} else {
    // Use a loop to print "C is fun" x times
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
