/**
 * Rest parameter and argument object
 * @description
 * 1. the rest param is denoted  by '...' parmename
 * The rest parameter syntax allows us to represent an idenfinite number of argument as a array
 * 2. arguments object name variable within the function body
 * 3. The arguments can be access by array-like nototion argument[i]
 * 4. it has an length property.
 */

function rest(...numN){
    console.log(numN[0]); // 'arguments' in build object, and it an array's object
}
rest (2,3,6);
