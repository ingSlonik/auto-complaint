const { readFileSync } = require("fs");

const input = process.argv[2];

if (input) {
    const complaints = readFileSync("complaints.txt", "utf8").split("\n");
    
    const lowerInput = input.toLocaleLowerCase();
    const results = complaints
        .filter(complaint => complaint.toLocaleLowerCase()
            .includes(lowerInput)
        )
        .sort();

    // Show the result
    console.log("\nResults:");
    results.forEach(result => console.log(result));

} else {
    console.log("Write part of complaint as first parameter.");
}
