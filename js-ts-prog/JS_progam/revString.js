let str = "abc";
let revStr = "";

for(let i=0;i<str.length;i++) {
    let char = str[i];
    revStr = char + revStr;
}
console.log(revStr); // Output: "cba"