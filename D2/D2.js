//Tommy Knight

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
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
Hi there young Stefano, 12 years old is very young to be learning about the main datatypes in Javascript but i'll do my best to explain what i know to you.
The first datatype i'll talk about are Numbers. 
We use numbers to give a numerical value to something, big numbers like 100 can be compared with small numbers like 7. We can use code to find the biggest numbers or to add numbers together to create different numbers.
The second datatype i'll talk to you about are Strings.
We use strings to represent text, we show something is a string by wrapping it in single '' or double quote "", also you can use backticks `` but mostly try to use the double quotes.
If i put your name into the double quotes like this, "Stefano", it becomes a string. We can then search for that string and use it throughout the code everytime we type it.
The third datatype i'll talk to you about are called Booleans, these are when something are either a yes (true) or a no(false).
If I wanted to ask the computer if 2+2 is more than 5, i could type console.log((2+2)>5)
Our computer would return with the answer false. The answer here is the Boolean Result.
The last Datatype i'll talk about are operators. 
There are a few types of operators but i'll only talk to you about logical operators and comparison operators because they're all I know about so far.
Comparison operators are the math symbols we use in code, they look like this:
> -> this is the greater than symbol
< -> this is the less than symbol
>= -> this is the greater than or equal to symbol
== -> this means the values are equal
=== -> this means the value and the type are equal
!= -> this means not equal
We use logical operators for some jobs using Variables and Values, they look like this:
&& -> this means AND, we use this when we want to use more than one variable together. (1<2 && 2>1) is true
|| -> this means OR, we use then when we are looking for at least one true variable. (5==5 || 2==1 || 1==3) will return true because at least one of these statements are true.
! -> we use this symbol when we want the opposite result, like saying NOT. If we type !true this would return us with false (not true). 
I hope this can help you on your journey young Stefano, now go forth and spread this knowledge to all your school friends. Good luck.
 */


/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* 
Variables are containers of values, we can use let to declare a variable then add a value to it. 
*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* 
console.log(12+30) 
*/

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* 
let x = 12 
*/

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

/* 
let name = "John Doe" 
*/

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

/* 
let x = 12
console.log(12-x) 
*/

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* 
let name1 = "john"
let name2 = "John"
console.log(name1 === name2)
console.log("name1".tolowercase === "name2".tolowercase)
*/



/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* 
let x = 2
let LiteralValue = "two"
console.log("LiteralValue")
*/



/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* 
let x = 5
if(x>1) {
    console.log(5+5)
}
 */


/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/