const score = 400
// console.log(score);


const balance = new Number(100) 
//specifically defining number
// console.log(balance);

// console.log(score.toString())
// console.log(typeof score)

const Newnum = 20.99
// console.log(Newnum.toPrecision(2));
// to be precise

const hundreads = 10000000
// console.log(hundreads.toLocaleString('en-IN'));
// to provide , system for the number

// ++++++++++++++++++Maths+++++++++++++++++++++++++

console.log(Math)

console.log(Math.abs(-2)) 
//converts negative into positive value

console.log(Math.round(2.9))
//rounds of the value of the value

console.log(Math.min(2,3,1))
// find min value 

console.log(Math.max(2,3,1))
// find max value

console.log(Math.random()*10+1)
// +1 to avoid 0 case

const min = 10
const max = 20
console.log (Math.round(Math. random () * (max - min + 1)) + min)
// max - min => for range and +1 to avoid 0 case
// +min to add a min value that min value should be
// Math.round to avoid decimal form