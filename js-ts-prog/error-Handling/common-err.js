/**
 * Common error object in js
 * 
 * @type
 * 1. Error - Base object for user error
 * 2. Reference Error
 * 3. Syntax Error
 * 4. Type Error
 */

 // 1. ReferenceError: err is not defined
 //console.log(err);

 // 2. SyntaxError: Identifier 'a' has already been declared
//  let a = 10
//  let a = 20
//  console.log(a)


 // 3. TypeError: Assignment to constant variable.
 const BROWSER = "Chorme"
 BROWSER = "Firefox"
 console.log(BROWSER);
