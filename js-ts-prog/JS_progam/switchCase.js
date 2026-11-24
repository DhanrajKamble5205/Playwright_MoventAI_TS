/**
 * Switch statement is used to perform different actions based on different conditions.
* work based on Accept, Reject, Default. 
*/
let browser = "Edge";

switch(browser) {
    case "Chrome":
        console.log("Chrome browser selected.");  // can do set of action.
        break;
    case "Firefox":
        console.log("Firefox browser selected.");
        break;
    case "Edge":
        console.log("Edge browser selected.");
        break;
    default:
        console.log("Unknown browser selected.");
}