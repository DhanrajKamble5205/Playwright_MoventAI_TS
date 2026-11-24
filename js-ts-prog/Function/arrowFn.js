/**
 * Arrow Funtions
 */
// let Addition = (num1,num2) => {
//     let sum = num1 + num2;
//     return sum
// } 
// let total = Addition(5,6);
// console.log(total);

// single line statement, then no need return type and { } for declaration. 
// If have multiple statement then inclose in {<body> } and provide return type as well.
let arrowFn = () => 10 >5
//console.log(arrowFn());

// single paramenter
let greet = name => 
    console.log(`Hello! ${name}`)
greet("Dhanraj"); 