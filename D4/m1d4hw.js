/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
console.log(`---------- E1 ----------`)
const area = function(l1, l2){
    const L1L2 = l1*l2
    console.log(`Area = ${L1L2}`)
}
area(5,4)
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, 
but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log(`---------- E2 ----------`)
const crazySum = function(firstNum, secondNum){
    if (firstNum === secondNum){
        let answer = 3*(firstNum+secondNum)
        console.log(`Wowza! your answer was ${answer}! isn't that crazy!` )

    }else{
        let answer = firstNum+secondNum
        console.log(`Wowza! your answer was ${answer}! isn't that crazy!` )
    }
}
crazySum(2,2)
crazySum(3,4)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
console.log(`---------- E3 ----------`)
const crazyDiff = function(numBer){
    (numBer <= 19) ? console.log(`The Difference is: `+ (19-numBer)) : console.log(`The Difference is: ` + 3*(numBer-19))
}
crazyDiff(5)
crazyDiff(20)
crazyDiff(19)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
console.log(`---------- E4 ----------`)
const boundary = function(n){
    ((n > 20 && n < 100) || n === 400) ? console.log(true) : console.log(`What you playing at fool? This number is out of bounds!`)// would like to know a better way of ending this ternary operator   
}
boundary(23)
boundary(400)
boundary(2)
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log(`---------- E5 ----------`)
const strivify = function(striveMe){
    striveMe.includes(`Strive`) === true ? console.log(striveMe) : console.log(`Strive`+ striveMe)
}
strivify(`Strivewhat`)
strivify(`Tommy`)
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
console.log(`---------- E6 ----------`) // had look look up how to use the Module Operator %, felt like this is messy putting the ?: ternary inside of an if else
const check3and7 = function(input){
    if (input % 2 === 0){
    (input % 3 === 0 ) ? console.log(`Divisible by 3!`) : (input % 7 === 0 ) ? console.log(`Divisible by 7!`) : console.log(`Not Divisible by 3 or 7`)
}else{console.log(`bruh not an even Number`)}
}
check3and7(3)
check3and7(4)
check3and7(12)
check3and7(14)

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
console.log(`---------- E7 ----------`) // had to google for .split .reverse and .join, really cool finding out you can whack them all onto the same parameter
const reverseString = function(spinMe){
    console.log(spinMe.split("").reverse().join(""))
}
reverseString(`Spin Me Flip Me Twist Me`)
reverseString(`Racecar`)
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
console.log(`---------- E8 ----------`)
const upperFirst = function(capitaliseThis){
    console.log(capitaliseThis[0].toUpperCase() + capitaliseThis.slice(1))
}
upperFirst(`hello`)
upperFirst(`o.o`)

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
console.log(`---------- E9 ----------`)
const cutString = function(cutMe){
    console.log(cutMe.slice(1,-1))
}
cutString(`hello`)
cutString(`howdy`)

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log(`hi`)

const giveMeRandom = function(n){
    let myArray = []
    for (let i=0; i<n; i++){
        myArray.push(Math.round(Math.random()*10))
    }
    console.log(myArray)
}
n(5)

let myArray = []
myArray.push(5,6,7)
console.log(myArray)
//     const giveMeRandom = function(n){
//         let randomNumbers = [];
//         for(let i=0; i<n; i++){
//             randomNumbers.push(Math.floor(Math.random()*10))
//         }
//         return console.log(randomNumbers)
// }
// giveMeRandom(7)
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/