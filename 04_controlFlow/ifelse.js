//if

if('condition') {
    // exution
}
    // if condition is true code will be executed
    // if false then not

// Short-hand notation

if('condition') 'code'

let score = 50;
if(score === 50) console.log("Score is 50");
//not recommended

// if else statement
let temperature = 37;

if(temperature == 37) {
    console.log("Temperature is 37");
} else {
    console.log("Temperature is not 37");
}

// if else if statement
let weather = "sunny";

if(weather == "rainy") {
    console.log("It's raining");
}   
else if(weather == "sunny") {
    console.log("It's sunny");
} 
else {
    console.log("It's neither rainy nor sunny");
}

// checking multiple statements

let userLoggedIn = true;
let debitCard = true;

if(userLoggedIn && debitCard) {
    console.log("You can make a purchase");
}
// here && checks both conditions this and that should be true

if(userLoggedIn || debitCard) {
    console.log("You can make a purchase");
} 
// here || checks either this or that should be true