// while ("condition") {
//     // code block to be executed
    
// }

let arr = [1,2,3,4,5,6,7,8,9,10]

let i = 0
while(i < arr.length) {
    console.log(`Number is ${arr[i]}`)
    i++;
}

let score = 1

do {
    console.log(`score is ${score}`)
    score++;
} while(score <= 11) {
    console.log(`score is ${score}`)
}