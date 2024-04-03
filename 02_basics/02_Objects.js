// singleton object
const student = new Object()
student.id = "123abc"
student.Name = "Kartikay"
student.isPresent = false

console.log(student)

// non singleton object
const students = {
    Names: { // we can nest objects in objects
        fullname: {
            firstname: 'kartikay',
            lastname: 'singh'
        }
    },
    email: "kartikay@gmail.com"
}
console.log(students.Names.fullname.lastname)
// accessing nested objects

const obj1 = {
    1: "a",
    2: "b",
} // first obj

const obj2 = {
    3: "c",
    4: "d",
} // second obj

// const obj3 = Object.assign({}, obj1, obj2)
// Adding two objects
// here {} is target not necessary to put but if not i.e. Object.assign(obj1, obj2) then all the values will be assigned to obj1

// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// other way to add object

console.log(obj3) 
console.log(Object.values(student)) // shows values in array
console.log(Object.entries(student)) // shows values in array with entries too
let arr = Object.entries(student)
console.log(arr[1][1])