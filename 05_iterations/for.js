// For loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i=0; i<=10; i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=2; j++) {
//         console.log(`inner ${j}`)
//     }
// }

// break and continue

for(let i=0; i<=10; i++){
    if(i === 5) {
        console.log('detected 5');
        continue
    }
    console.log(i)
}