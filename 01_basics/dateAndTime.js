// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
//different ways to represent, represent date and time

console.log(typeof myDate) //object

let myCreatedDate = new Date("02-12-2012")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let month = new Date()
console.log(month.getDay()) 
console.log(month.getDate()) 
console.log(month.getFullYear()) 
console.log(month.getMinutes()) 

// `${month.getDay()}` for streak