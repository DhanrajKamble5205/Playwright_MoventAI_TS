
/**
 * Self Invoking Function
 * just added parenthesis in start of function and end of function.
 */

// (function addTwonum(num1,num2) {
//     let sum = num1 + num2;
//     console.log(sum);
//     return sum
// }) (5,3)

(function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}`);
}) ("Dhanraj")