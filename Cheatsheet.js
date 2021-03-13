`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 METHODS 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`

eval() 
isFinite()`returns boolean`
isNaN() `returns boolean`
parseFloat() `converts string into floating point number`
parseInt() `converts string into a number`

// To add/remove elements:

Array.shift() `extracts an item from the beginning,`
Array.unshift() `adds items to the beginning.`
Array.push()`adds items to the end,`
Array.pop() `extracts an item from the end,`
Array.concat() `adds/combines arrays to give a new array`
Array.splice(pos, deleteThis, ...items) `at index pos deletes deleteThis elements and inserts items.`
Array.slice(start, end) `gives new array, copies elements from index start till end (not inclusive) into it.`

// To search among elements:

Array.indexOf/lastIndexOf(item, pos) `look for item starting from position pos, return the index or -1 if not found.`
Array.includes(value) `returns true if the array has value, otherwise false.`
Array.find(func) `filter elements through the function, return first/all values that make it return true.`
Array.filter(func) `filter elements through the function, return first/all values that make it return true.`
Array.findIndex() `is like find, but returns the index instead of a value.`
Array.valueOf() `Returns the primitive value of the specified object`

// other stuff:

Array.forEach(func)  `executes a provided function once for each array element// arr.forEach(item => {console.log(item)})`
Array.map(func)  `creates a new array from results of calling func for every element.`
Array.sort(func) `sorts the array in-place, then returns it.`
Array.reverse()  `reverses the array in-place, then returns it.`
String.split() `convert a string to array`
Array.join() `turns array into string`
Array.sort() `sorts elements alphabetically`
Array.reduce/reduceRight(func, initial) `calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.`
Array.some()
Array.split()
Array.every()

String.indexOf()
String.slice()
String.Split()
String.call()

Object.keys()
Object.values()
Object.hasOwnProperty()

// Math :
Math.max()
Math.min()
Math.floor()
Math.ceil()
Math.random()
Math.round()

// Additionally:
// Array.isArray(arr) checks arr for being an array.
// sort, reverse and splice modify the array itself.

5 == "5" is true

5 === "5" is false

"" == false is true

"" === false is false

0 == false is true

0 === false is false

