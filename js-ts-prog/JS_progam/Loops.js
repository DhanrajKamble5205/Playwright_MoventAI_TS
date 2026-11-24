
// Print the number from 1 to 10 using for loop
let i=10;

// for(i=1; i<=10;i++) {
//   //      console.log(i);
// }


// intereate data from aray using for loop

let arr = ["apple", 10, "banana", 20, "orange", 30];

// console.log(arr[0]); // apple
// console.log(arr[1]); // 10
// console.log(arr[2]); // banana
// console.log(arr[3]); // 20
// console.log(arr[4]); // orange
// console.log(arr[5]); // 30

arr.push(40);
// console.log(arr[6]); // 40
//console.log(arr.length); // 7

let sum =0;

for(let i=0; i<arr.length; i++) {
    let arrEle = arr[i];
    //console.log(arrEle);
    // if(typeof arrEle === "number") {
    //     sum += arrEle; // it is same as sum = sum + arrEle;
    // }

    if (typeof arrEle !== "number") continue;
    sum += arrEle;
}
//console.log(sum); // 100


let windows = ["Google","Amazon","YouTube"];

for (let i=0; i <windows.length;i++) {
    let window = windows[i];
    if(window === "YouTube") break;

    console.log(window);
}