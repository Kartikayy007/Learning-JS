// object literals 

const jsuser = {
    Name: "kartikay",
    age: 18,
    location: "delhi",
    email: "karitkay@google.com",
    isLoggedIn: true,
    lastLoginDays: ["monday","saturday"]
}

console.log(jsuser.age)
console.log(jsuser["age"]) 
//can also be accsessed using sqaure notations

jsuser.age = 19
// to update values

Object.freeze(jsuser)
// freezes object now no values can be updated