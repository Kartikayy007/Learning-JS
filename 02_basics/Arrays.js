// Arrays

const arr = [1,2,3,"kartikay"]

console.log(arr[1])
console.log(arr[3])

arr.push("singh") // pushes given in the index
arr.push(6)
arr.push(9)

arr.unshift(0)
arr.shift()

arr.pop()

console.log(arr.includes(3)) //checks if given is included
console.log(arr.includes(10))

const newarr = arr.join() //converts arr into string

console.log(newarr)
console.log(arr)
console.log(typeof newarr)

// slice, splice

//slice 
let array1 = [0,1,2,3,4,5]
console.log(array1)
let slicedArray = array1.slice(1,4)
console.log(slicedArray);
console.log("sliced array left ==> ", array1)
// it slices elemets from given index as per 1 to 4
// but last index 4 will not be included

//splice
let array2 = [0,1,2,3,4,5]
console.log(array2)
let splicedArray = array2.splice(1,4)
console.log(splicedArray);
// also slices elemets from given index as per 1 to 4
// but do includes the last element too i.e. here 4
console.log("splicedArray",array2)
// also if you print spliced array youll see the range spliced is removed from the array itself i.e only 0,5 left

// Adding two or more arrays 

let marvel = ["thor","spiderman","iron man"]
let dc = ["batman","robin","flash"]

// marvel.push(dc) 
// pushes dc in marvel array but dc is one element itself
// console.log(marvel)

// let allHeros = marvel.concat(dc)
// // adds both arrays but only one array can be added
// console.log(allHeros) 

// spreadout way to add two arrays
const Heros = [...marvel, ...dc]
// more preffered than concat because we can add more than one arrays
console.log(Heros)

const newArray = [1, 2, 3, [14, 5, 6], 7,[16,[7, 14], 5]]
//when we have array in array we can use .flat()
const finalArray = newArray.flat(Infinity)
// flat makes the whole into one array and we can add depth to it that is at which depth we can add up array 
console.log(finalArray)

// case to be read again
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting