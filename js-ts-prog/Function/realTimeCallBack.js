/**
 * Real time call back function using api request
 */
const fetch = require("node-fetch");
/*
// promises method to fetch the response of the request.
function getAPIResponse() {
    fetch("https://api.github.com/users/github").then((res) => {
        return res.json(); // fechting the response of the request. for chanain this we return it.
    }).then((updateRes) => {
        console.log(updateRes) // to resolve the promiss we chanin the promises.
    }).catch((err) => {
        console.log(err); // whatever the error got those dispalyed on terminal
    })
}

// calling the function.
getAPIResponse();
*/

async function getAPIRes() {
    let Response = await fetch("https://api.github.com/users/github");
    let data = await Response.json();
    console.log(data);
}getAPIRes();