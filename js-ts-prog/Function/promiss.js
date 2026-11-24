/**
 * Promises
 */

let proObj = new Promise( (resolve, reject) => {
    console.log(`Executing the promise...`)
    if (1<2){   // this condition validate the is resolve or reject
        setTimeout( () => {
        resolve(`Resolved the promises...`)
    }, 2000)
    } else{
        setTimeout( () => {
        reject(`some error occured in the promises...`)
    }, 2000)
    }
})

// proObj.then((res) => {
//     console.log(res)  // this 'res' represent to resolve statment
// }).catch((err) => {
//     console.log(err) // this 'err' represent to reject   statment
// })

// Async and await
async function getData() {
    try{
        let res = await proObj
        console.log(res)
    } catch(error){
        console.log(error)
    }
}
getData();