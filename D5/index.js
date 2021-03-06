/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
const test = `TestString`

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
const sum = 10+20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
const random = (Math.floor(Math.random()*20))

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
const me ={
    name: `Tommy`,
    surname: `Knight`,
    age: `28`,
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age


/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
me.skills = [`HTML`, `CSS`, `Javascript`]


/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
   */
  me.skills.pop()
  console.log(me)
  
  // JS Functions
  /* Ex.1
  Write a function called "dice"; it should randomize an integer number between 1 and 6.
  */
 console.log(`-------------------------------------------------1`)
 const dice = function(){
     return diceRoll =(Math.ceil(Math.random()*6))
    }
    dice(true)
    console.log(diceRoll)
    
    /* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
    */
   console.log(`-------------------------------------------------2`)
   const whoIsBigger = function(num1, num2){
       return result = (num1 > num2) ? num1 : (num2 > num1) ? num2 : `Same Size`
    }
    whoIsBigger(5,10)
    whoIsBigger(10,5)
    whoIsBigger(10,10)
    console.log(result)
    /* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
    */
   console.log(`-------------------------------------------------3`)
   const splitMe = function(cutMe){
       return console.log(cutMe.split(` `))
   }
   splitMe(`Cut me into tiny little pieces`)

   /* Ex.4
   Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
   */
  console.log(`-------------------------------------------------4`)
const deleteOne = function(stringQ, boolean){
    if(boolean === true){
        return console.log(stringQ.substring(1))
       }else{
        return console.log(stringQ.slice(0,-1))
        }
}
deleteOne(`hello`, false)

  /* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
console.log(`-------------------------------------------------5`)

const onlyLetters = function(string){
   return console.log(string.replace(/\d+/g, ``))
}
onlyLetters(`123howdy123`)


/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log(`-------------------------------------------------6`)

const isThisAnEmail = function(email){
   return email.includes(`@`&&`.`)
}
console.log(isThisAnEmail(`tommy@tommy.com`))
console.log(isThisAnEmail(`2o8yn3r@wed`))
/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
console.log(`-------------------------------------------------7`)

const whatDayIsIt = function(){
    return (new Date()).getDay()
}
const today = whatDayIsIt()
console.log(today)

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log(`-------------------------------------------------8`)
let myArray = []
const rollTheDices = function(n){
    while (myArray.length < n ){
        myArray.push((Math.ceil(Math.random()*6)))
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const diceSum = myArray.reduce(reducer)
    console.log(`Sum: ${diceSum}`)
    return diceSum, myArray
}
v =>
console.log(rollTheDices(3))
/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
console.log(`-------------------------------------------------9`)


/* Ex.10
Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
console.log(`-------------------------------------------------10`)
const isTodayMyBirthday = function(){
  const todayMan = new Date()
  todayMan.setHours( 0,0,0,0 )
  const birthday = new Date()
  birthday.setHours( 0,0,0,0 )
  birthday.setMonth(2)
  birthday.setDate(12)
  console.log(todayMan)
  console.log(birthday)
  if (todayMan.getTime() === birthday.getTime()){
    return true
  }else{
    return false
  }
}
console.log(isTodayMyBirthday())
// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]
/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
console.log(`-------------------------------------------------11`)
const deleteProp = function (obj, str) {
  delete obj[str]
  return obj
}
console.table(deleteProp(movies[1], `Type`))

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
console.log(`-------------------------------------------------12`)


const olderMovie = movies.reduce((o, m) => m.Year<o.Year ? m : o)
console.table(olderMovie)
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
console.log(`-------------------------------------------------13`)
let counter = 0
for (let i = 0; i < movies.length; i++){
  counter++
}
console.log(counter)
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
console.log(`-------------------------------------------------14`)
let titt = []
const onlyTheTitles = movies.map(check => titt.push(check.Title))
console.table(titt)

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
console.log(`-------------------------------------------------15`)
let milly = []
const onlyInThisMillennium = movies.map(check =>{if (parseInt(check.Year) > 1999) milly.push(check)})
console.table(milly)

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

console.log(`-------------------------------------------------16`)
let yourMovie = []
id = "tt4154796"
const getMovieById = movies.forEach(n =>{if(n.imdbID === id ) yourMovie.push(n)})
console.table(yourMovie)

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
console.log(`-------------------------------------------------17`)

let total = 0
const sumAllTheYears = movies.forEach(item => total += parseInt(item.Year))
console.log(total)

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
console.log(`-------------------------------------------------18`)

let titels = []
let search = `ord`

const searchByTitle = n => movies.forEach(n=>{if (n.Title.toLowerCase().includes(search)) titels.push(n)})
searchByTitle()

console.table(titels)
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
console.log(`-------------------------------------------------19`)

let hmm = `ord`
let goodMatch = []
let badMatch = []

let searchAndDivide = n => movies.forEach(n=>(n.Title.toLowerCase().includes(hmm))? goodMatch.push(n): badMatch.push(n))
searchAndDivide()

console.table(badMatch)
console.table(goodMatch)
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
console.log(`-------------------------------------------------20`)
let cleanPoster = []
let number = 1

// help
// const removeIndex = movies.forEach(n =>{if n.findIndex(number) === number} () cleanPoster.push(n)})
// const removeIndex = n =>{if (n.indexOf() === number)cleanPoster.push(n)}
// const removeIndex = movies.forEach(movies, number => (movies.indexOf(movies[number]) !== number)? cleanPoster.push(movies[number]): null)
// console.log(cleanPoster)
// console.log(movies.indexOf(movies[4]))

console.log(cleanPoster)
// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

console.log(`-------------------------------------------------21`)

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

console.log(`-------------------------------------------------22`)
/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

console.log(`-------------------------------------------------23`)
/* This movies array is used throughout the exercises. Please don't change it :)  */

 //QUESTIONS:
//USING RETURN IN FUNCTIONS, DO I ALWAYS NEED TO DO THIS, SHOULD I BE USING RETURN CONSOLE.LOG()?
//CAN FUNCTION PARAMETERS BE GENERIC NAMES THAT CAN BE REUSED IN DIFFERENT FUNCTIONS WITHOUT AFFECTING CODE?
// USING REGEX
// how do i console log the result of a function, when i try it simply returns the datatype

// const deletePoster = function (obj, str) {
//   delete obj[str]
//   return obj
// }
// console.table(deletePoster(movies, `Poster`))
