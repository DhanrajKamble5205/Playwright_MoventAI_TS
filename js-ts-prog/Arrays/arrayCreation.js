/**
 * Array creation
 */

// 1. Literal 
let arr = ['Apple','Mango','Orange'];
//console.log(arr);

let count =0;
//Iterate using forEach loop
// arr.forEach(element => {
//     console.log(element);
// });

//Iterate using for..of loop
for(let fruit of arr){
    //console.log(fruit);
    count++;
} 
console.log(count);
