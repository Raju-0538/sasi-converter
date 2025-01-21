// index.js
const readline = require('readline');
const convert = require('./convert');  // Import the convert function

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for input and process conversion
const promptUser = () => {
    rl.question('Enter amount (INR) or type "exit" to quit: ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        const inr = parseFloat(input);

        try {
            const usd = convert(inr);  // Call convert function
            console.log(`INR ${inr} = USD ${usd}\n`);
        } catch (e) {
            console.log(e);  // Handle any errors (like invalid input)
        }

        promptUser();  // Recursively prompt the user
    });
};

// Start prompting the user
promptUser();
