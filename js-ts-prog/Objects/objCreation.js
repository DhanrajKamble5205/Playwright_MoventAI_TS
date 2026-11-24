/**
 * 1. using object Literal / Initializer
 */

// let obj = {
//     name: "Dhanraj",
//     age : "35",
//     isMarride : false
// }

// //console.log(obj.isMarride);

// /**
//  * 2. Using Constructer fucntion
//  * constructor function name should be start with in capital alphabet.
//  */

// function Person(name, age, isMarride){
//     this.name = name
//     this.age = age
//     this.isMarride = isMarride
//     return `The name is: ${this.name}`
// }

// let obj1 =new Person("Dhanraj",35, true);
// console.log(obj1);

// let obj2 = Object.create(obj)
// console.log(Object.getPrototypeOf(obj2));

let testRunner = "local"
let machineID = "windows1234"
let envFile = "test_config"

let reportData = {
    testID : 12345,
    status : "Pass",
    "Pass/Fail" : "Pass",
    totalTest : 100,
    totalPass : 80,
    isInScore : true,
    passRate: function() { // function within function
        return (this.totalPass/this.totalTest)*100;
    },
    runDate : new Date(),
    runner : testRunner,
    windowID : machineID? machineID : "Unknown",
    [envFile] : {
        env : "staging",
        url : "https//staging.com"
    }
}

// console.log(reportData.status);
// console.log(reportData["isInScore"]);
// console.log(reportData["Pass/Fail"]);
// console.log(reportData.passRate()); // calling to the funtion

// console.log(reportData.test_config);
// console.log(reportData.test_config.env);

// // access the data in Object form keys and value.
// let keys = Object.keys(reportData);
// console.log(keys);
// let value = Object.values(reportData);
// console.log(value);

// change the value of obj
reportData.status = "Fail",
reportData.test_config.env = "Testing";
console.log(reportData);
