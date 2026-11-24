
// Call Back function

function printMessage(msg){
    console.log(msg);
}

function greet(name, greeter){
    let greetMsg = `Hello ${name}`
    return greeter(greetMsg); 
}

// 1. Call the callback function 
greet("Dhanraj", printMessage); 
// here we pass argument as function name. means 'printMessage' replace 'greeter'
// Now 'printMessage' param which get from 'greeter(greetMsg)' now 'greetMsg' replace with 'msg'.
// now msg => `Hello ${name}` and same it is printed in console.log.

// 2. Call the callback function.
// greet("Dhanraj", function (val) {
//     console.log(`The received value from the main function: ${val}`); // Now here val => greetMsg
// })

// 3. arrow function. call back function
// greet("Dhanraj", (res) => {
//     console.log(`The received value from the main function: ${res}`); // Now here val => greetMsg
// })

// 4. Single line statement not required {}
//greet("Dhanraj", (res) =>  console.log(`The received value from the main function: ${res}`))

// 5. return statement in callback function
let result = greet("Dhanraj", res => { // if we assigned variable to function then we required return type in main function.
    return `The received value from the main function: ${res}`
}) 
console.log(result)
