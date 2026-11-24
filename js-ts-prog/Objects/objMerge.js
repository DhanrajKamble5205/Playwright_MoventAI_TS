let obj1 = {
    a: 1,
    b:2,
    c:3
}

let obj2 = {
    d : 4,
    e : 5,
    f : 6
}
let obj3 = {
    x : 7,
    y : 8,
    z : 9
}

let obj4 = {
    p : 11,
    q : 12,
    r : 13
}
// Using assign operator( it use for merge only two obj)
let obj = Object.assign(obj1,obj2,obj3,obj4)
//console.log(obj)
console.log(obj1) // store the all data of the object

// using Spread Operator ( it use of multiple Object merging)
let objM = {...obj1,...obj2,...obj3,...obj4}
//console.log(objM)