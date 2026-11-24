// function without name is assigned to a variable

// let addTwoNum = function (num1, num2){ // still addTwoNum  is a function. same meaning with different syntax
//     let sum = num1 + num2;
//     return sum;
// }

//let val = addTwoNum( 2, 4);
// console.log(val);

// 2. Function with name is a assiged to a variable.
let addTwoNum = function add(num1, num2) { 
    // here we have name of function but we assiged this function to variable.
    let sum = num1 + num2;
    return sum;
}
let val = add( 2, 4); //
console.log(val);
