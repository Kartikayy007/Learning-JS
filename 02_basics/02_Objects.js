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
}