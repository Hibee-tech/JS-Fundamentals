// Get command-line arguments (excluding "node" and script name)
const args = process.argv.slice(2);

// Print the first argument or "No argument" if none are passed
console.log(args[0] || "No argument");
