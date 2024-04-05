// Declaring function
function sayMyName() {
    console.log("Kartikay")
}

sayMyName // Refrence of the function
sayMyName() // Execution of function

// function addingTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

function addingTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}

const result = addingTwoNumbers(1, 2)
console.log(result)