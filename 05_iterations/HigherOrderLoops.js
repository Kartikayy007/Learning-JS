// +++++++++++++++++++ forOf loop +++++++++++++++++++

let arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i)
}

let greetings = "hello"

for(const greet of greetings) {
    console.log(`each letter is ${greet}`)
}

// Maps

const map = new Map()

map.set('in', 'india')
map.set('us', 'united states')
map.set('uk', 'united kingdom')
map.set('au', 'australia')

console.log(map)

for(const key of map) {
    console.log(key)
} //this loop gives the key in form of an array

for(const [key, value] of map) {
    console.log(`key is ${key} and value is ${value}`)
}   // this loop gives the key and value separately


// ++++++++++++++++++++ forIn loop ++++++++++++++++++++


let obj = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    swift: "swift by  apple"
}

// for(const key in obj) {
//     console.log(key)
// } // this loop gives the key

for(const key in obj) {
    console.log(`${key} : ${obj[key]}`)
} // this loop gives the key and value

// It be done on array?

let arr1 = [1,2,3,4,5]

for(const key in arr1) {
    console.log(key)
} // this loop gives the index


// ++++++++++++++++++ forEach ++++++++++++++++++

// most used loop in js

const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach( function(name) {
//     console.log(name)
// } )

// we can also define function outside

// function printFruit(name) {
//     console.log(name)
// }

// fruits.forEach(printFruit)

// we can also use arrow function

fruits.forEach( (name, index, arr) => {
    console.log(name, index, arr)
})

let coding = [
    {
        name: "javascript",
        type: "dynamic",
    },
    {
        name: "python",
        type: "dynamic",
        class: "high level"
    },
    {
        name: "ruby",
        type: "dynamic",
        class: "high level"
    },
    {
        name: "swift",
        type: "static",
        class: NaN
    }
]

coding.forEach( (item) => {
    console.log(item.name)
    console.log(item.type)
})

