let str = "abbc";
let count =0;

for(let i=0; i<str.length;i++) {
    let char = str[i];
    if( char === 'b') {
        count++;
    }
}
console.log(count/2); // Output: 2