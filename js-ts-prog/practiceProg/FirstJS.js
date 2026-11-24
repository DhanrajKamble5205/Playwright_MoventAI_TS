/**
 * input = "(((())))))"
 * Count the opening and closing brakets
 */

let input = "()((())))))"
let openBrak = 0; 
let closeBrak = 0;

for(let i=0; i< input.length; i++){
    if( input[i] === "(" ) {
        openBrak++;
    } else {
        closeBrak++;
    }
}
console.log(`Opeing bress are: ${openBrak} \nClosing bress are: ${closeBrak}`);

//combinatio of ()
if (openBrak > closeBrak){
    console.log(`count of combination: ${closeBrak}`)
}else{
    console.log(`count of combination: ${openBrak}`)
}
// Find the count of () open and close bress
// input = "((((())))" 
// input = "(((((())))))))" 6/8