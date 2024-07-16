// object literals 

const jsuser = {
    Name: "kartikay",
    age: 28,
    location: "delhi",
    email: "kartik@google.com",
    isLoggedIn: true,
    lastLoginDays: ["monday","saturday"]
}

console.log(jsuser.age)
console.log(jsuser["age"])  //can also be accsessed using sqaure notations

jsuser.age = 19
// to update values

Object.freeze(jsuser) 
// freezes object now no values can be updated
jsuser.age = 12;
console.log(jsuser.age)