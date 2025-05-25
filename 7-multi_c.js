const x = parseInt(process.argv[2]);

if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    const count = Math.abs(x);

    for (let i = 0; i < count; i++) {
        console.log("C is fun");
    }
}




