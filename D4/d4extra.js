/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

numBers = [1,2,3,4,5]
console.log(numBers)
numBers.reverse()
console.log(numBers)

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log(`-----------------------`)

const giveMeRandom = function(n){
    let myArray = [] 
    while(myArray.length < n){
        myArray.push(Math.round(Math.random()*10))
        if(myArray.length <n){
            myArray.unshift(Math.round(Math.random()*10))
            r
        }
    return console.log(myArray)
    }
}
giveMeRandom(6)

// const giveMeRandom = function(n){
//     let myArray = []
//     for (let i=0; i<n; i++){
//         myArray.push(Math.round(Math.random()*10))
//     }
//     console.log(myArray)
// }

// let myArray = []
// myArray.push((Math.round(Math.random()*10)))
// console.log(myArray)
// let randomNum = (Math.round(Math.random()*10))


// console.log(randomNum)
// const giveMeRandom = function(n){
//     if (myArray.length < n){
//         myArray.push((Math.round(Math.random()*10)))
//         return
//     }
// }
// giveMeRandom(2)
// console.log(myArray)


/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/