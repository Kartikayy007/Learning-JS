// Declaring function
function sayMyName() {
    console.log("Kartikay")
}

sayMyName // Refrence of the function
sayMyName() // Execution of function

// function addingTwoNumbers(num1, num2){
//  console.log(num1 + num2)
// }

function addingTwoNumbers(num1, num2){ // it is parameter (num1 and num2)
    let result = num1 + num2 //store them and resturn then print the sum is the correct way of doing things
    return result
    //or we can directly type 
    //Return num1 + num2 both are same
}
//After return nothing prints
// return is the end
const result = addingTwoNumbers(1, 2) 
// 1 and 2 are arguments
console.log(result)

function loginUserMessage(username) {
    return console.log(`${username} just logged in`);
}

console.log(loginUserMessage("kartikay"))
loginUserMessage('karti')