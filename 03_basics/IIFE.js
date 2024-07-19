// immediately invoked function expression
// IIFE

// Regular function declaration and invocation
// This approach can cause global scope pollution
function sayMyName() {
    console.log("Kartikay");
}
sayMyName(); // Invoking the function

// To avoid global scope pollution, we use an Immediately Invoked Function Expression (IIFE)

(function name() { // also called named IIFE
    console.log("Kartikay");
})(); 
// IIFE is defined and executed immediately using ()()
// we used ()()
//(to define function)(to exucute function)
// alse We use semicolon as it doesnt know where to end the context so we use  ; to end it

// we can also use arrow function in IIFE
( () => { 
    console.log("Kartikay");
} ) ()

// IIFE with parameters
( (name) => {
    console.log(name);
} )("Kartikay")