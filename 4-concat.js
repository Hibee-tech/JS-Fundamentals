// Get command-line arguments (excluding "node" and script name)
const args = process.argv.slice(2);

// Print the sentence with provided arguments
console.log(`${args[0]} is ${args[1]}`);
