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
// also if you print spliced array youll see the range spliced is removed from he array itself i.e only [ 0, 5 ] left