/**
 * Array containing an Object
 */

let book = [
    {
        category : "referance-1",
        author : "sam",
        price : 10.11
    },
        {
        category : "referance-2",
        author : "devid",
        price : 12.99
    },
        {
        category : "referance-3",
        author : "martin",
        price : 8.88
    }
]

let priceOfArr = [] 
for(let val of book){
   priceOfArr.push(val.price)
}
console.log(priceOfArr);
