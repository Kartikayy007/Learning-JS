// +++++++++++++++++++ this keyword +++++++++++++++++++++
// this keyword is used to refer to the object that is calling the function

const user = {
    username: "kartikay",
    price: 999,

    welcomemessage: function() {
        console.log(`Welcome ${this.username}`);
        console.log(this) // console log the context of this object
    }
}
user.welcomemessage() // context for this.username is kartikay 
user.username = "sam" // username is changed to sam
user.welcomemessage() // context for this.username changes to sam

console.log(this) // context of this is global object which is empty object 

// +++++++++++++++++++++ Arrow function +++++++++++++++++++++

// Arrow function is a shorter syntax for writing function expressions

let chai = function() {
    console.log("chai")
}

let coffee = () => {
    console.log("coffee")
}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 
// if we use curly braces we have to write return keyword
// also called expilcit return

const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) also called implicit return

// const addTwo = (num1, num2) => ({username: "kartikay"}) 
// to return object we have to use paranthesis