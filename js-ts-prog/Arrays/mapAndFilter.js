/**
 * Use of Map method of Array
 */

let giveArr = ["123","41","74"]

// convert using 'ParseInt'
// let mapArr = giveArr.map(ele => parseInt(ele))
// console.log(mapArr);

// convert using 'Unary Operator' (+)
let mapArr = giveArr.map(ele => +ele)
//console.log(mapArr);


/**
 * Use of Filter method of Array
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

let res = book.filter(ele => ele.price > 10)
console.log(res)