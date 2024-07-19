// ++++++++++++++ Hoisitng ++++++++++++++
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
x(); 
greet();

function x() { 
    let x = 10;
    console.log(x);
}
function greet() {
  console.log('Hello!');
}
