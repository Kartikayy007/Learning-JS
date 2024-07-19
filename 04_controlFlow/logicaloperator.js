// Types of Logical Operators
// < , > , <= , >= , == , === , != , !==

// +++++++ == and === ++++++
// == (Loose Equality): Checks if the values of two operands are equal after performing necessary type conversions.
// === (Strict Equality): Checks if both the values and data types of two operands are equal. No type conversion is performed.
if(1 == 1) {
    console.log("1 is equal to 1");
}
if(1 == '1') {
    console.log("1 is equal to '1'"); // The == operator performs type conversion, converting the string '1' to a number.
}
if(1 === '1') {
    console.log("1 is equal to '1'"); // The === operator checks for both value and data type equality. (wont be excuted)
}
//Always prefer === over == for strict comparisons to avoid unexpected behavior due to type coercion.

// +++++++ != and !== +++++++
// != (Loose Inequality): Checks if the values of two operands are not equal, performing type conversions if necessary.
// !== (Strict Inequality): Checks if the values or data types of two operands are not equal. No type conversion is performed.

if(1 != 2) {
    console.log("1 is not equal to 2");
}
if(1 != '2') {
    console.log("1 is not equal to '2'"); // The != operator performs type conversion, if necessary.
}
if(1 !== '1') {
    console.log("1 is not equal to '1'"); // The !== operator checks for both value and data type inequality.
}
// Always prefer !== over != for strict comparisons to avoid unexpected behavior due to type coercion.