// default parameter

function greet (name, greeting = "Hello") {
//    console.log(`${greeting}, ${name}`);
}
greet("Dhanraj", "Hi!"); // calling the function

//2. Passing undefined/ any falsy value if not know

// function printFullName(fname, mname, lname){
//     if(mname){
//         console.log(`${fname} ${mname} ${lname}`)
//     } else{
//         console.log(`${fname} ${lname}`)
//     }
// }
// printFullName("Dhanraj", undefined ,"Kamble");

// 3. passing primitives, object type as arg
function printFullName(personObj){
    console.log(`${personObj.firstName} ${personObj.lastName}`)
}
printFullName({
    firstName : "Dhanraj",
    lastName : "Kamble"
})