// falsy values: false , 0 , -0,  '' , null , undefined , NaN, bigInt(0n), ""

// Truthy values: true , 1 , "0" , 'false' , "any value", [], {}, function(){} , bigInt(1n)

let arr = []

if(arr.length === 0) {
    console.log("array is empty")
} // checking if array is empty

let obj = {}

if(Object.keys(obj).length === 0) {
    console.log("Object is empty")
}  //check if the object is empty

// Nullish coalescing operator
// Nullish coalescing operator is used to check if the value is null or undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1) 

// ternary operator

let val2 = 5
let val3 = 10

let result = val2 > val3 ? console.log("val2 is greater") : console.log("val3 is greater")

// syntax:    condition  ?            true                :           false