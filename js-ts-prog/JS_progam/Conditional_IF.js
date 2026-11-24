/**
 * If - Condition
 */

// Use Case 1: Handale the pop-up using If conditional statement.
let popUpExists = true;

// if(popUpExists) {
//     console.log("Pop-up exists, handle it.");
// }

//if(popUpExists) console.log("Pop-up exists, handle it.");

// USE CASE 2: If-not conditional statement, user generated Error message.
let data = null;

//if(!data) throw Error("Data is not available, please check the source.");

//USE CASE 3: if-else, if file exists, read the file, else create a new file.
let fileExists = "Yes";

// if(fileExists === "N") {
//     console.log("File exists, reading the file.");
// } else {
//     console.log("File does not exist, create a new file.");
// }

//USE CASE 4: if-else-if, Multiple conditions.

let err = "Success";

if(err === "Error") {
//     console.log("An error occurred while processing the file.");
// } else if(err === "AssertionErr") {
//     console.log("-----------------Assertion Failed-----------------");
// } else if(err === "DataValidationError") {
//     console.log("--------Data validation failed-------------");
// }else {
//     console.log("------unknown------, please check the file.");
// 
}

// USE CASE 5: if else [ inner conditional statement ]

let isSccess = false;

if(isSccess === true) { 
//     console.log( "Storing the DB values in the file.");
// } else {
//     console.log(" No data Found.");

//     let errorCode = 'Accept';
//     if (errorCode === 'Unknown') {
//         console.log("Error code is Accept.");
//     } else {
//         console.log("Error code is not Accept, please take alternative action.");
//     }
}


// USE CASE 6: if in loop.

for (let i = 1; i <= 10; i++) {
    if (i === 6) break;

        console.log("i is: ", i);
}