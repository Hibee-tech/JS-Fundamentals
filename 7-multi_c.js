const x = parseInt(process.argv[2]);

// Check if x is a valid integer
console.log(isNaN(x) || x < 1 ? "Missing number of occurrences" : Array(x).fill("C is fun").join("\n"));
