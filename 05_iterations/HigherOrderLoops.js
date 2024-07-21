// +++++++++++++++++++ forIn +++++++++++++++++++
// forIn is used to iterate over the properties of an object.

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

// for(const key of map) {
//     console.log(key)
// } this loop gives the key in form of an array

for(const [key, value] of map) {
    console.log(`key is ${key} and value is ${value}`)
}   // this loop gives the key and value separately