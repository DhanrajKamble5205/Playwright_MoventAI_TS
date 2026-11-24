
// 1. Named function

function addTwoNum(num1, num2){
    let sum = num1 + num2;
    return sum;
}

// calling of the function
let total = addTwoNum(3 ,4);
//console.log(total);

// 2. function that does an action
function click(element){
   // console.log(`Click the given element: ${element}`)
}

// calling function
click("Login button"); // here click is the function name and passing parameter value.

// 3. Any type of data can be provided and no type check is done
let sum =addTwoNum("two",3); // it is done concatination.
//console.log(sum);

// 4. more or less arguments can be provided not lenth will be check.

let moreArg = addTwoNum( 2, 3, 5); // it will add only first two occurance.
console.log(moreArg);

