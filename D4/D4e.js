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
console.log(`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　E1　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`)
numBers = [1,2,3,4,5]
console.log(numBers)
numBers.reverse()
console.log(numBers)


/* EXERCISE 2
Write the code to get the maximum value in an array.
*/
console.log(`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　E2　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`)
console.log(Math.max(...numBers))

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　E3　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`)
console.log(Math.min(...numBers))

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
console.log(`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　E4　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`)
let evenArray = []
numBers.forEach(value => value % 2 === 0 ? evenArray.push(value) : null)   
console.log(evenArray)

/* EXERCISE 5
Write the code to delete even entries from an array.
*/
console.log(`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　E5　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`)
let oddArray = []
numBers.forEach(value => value % 2 === 1 ? oddArray.push(value) : null)
console.log(oddArray)

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
console.log(`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　E6　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`)
const unVowelMe = `woah woah check this string out without any vowels woahwoahowiahhowhah`
const unVowling = unVowelMe.split(``)
let noVowels = ``
unVowling.forEach(v => (
        v.charAt(0).toLowerCase() !== 'a' &&
        v.charAt(0).toLowerCase() !== 'e' &&
        v.charAt(0).toLowerCase() !== 'i' &&
        v.charAt(0).toLowerCase() !== 'o' &&
        v.charAt(0).toLowerCase() !== 'u' &&
        v.charAt(0).toLowerCase() !== 'y') ? noVowels += v : null)
console.log(noVowels)

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
console.log(`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　E7　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`)
const arRay = [1,2,3,4,5,6,7,8,9]
let bigGary = arRay.map(v => v +1)
console.log(bigGary)

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
console.log(`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　E8　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`)
let strive = ["strive", "is", "great"]
let newb = []
let replaCe = strive.forEach(v => newb.push(v.length))
console.log(newb)

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/