`✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 METHODS 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼`

eval()
isFinite()
isNaN()
parseFloat()
parseInt()

// To add/remove elements:

Array.push(...items)    `adds items to the end,`
Array.pop()                   `extracts an item from the end,`
Array.shift()                  `extracts an item from the beginning,`
Array.unshift(...items) `adds items to the beginning.`
Array.splice(pos, deleteCount, ...items) `at index pos deletes deleteCount elements and inserts items.`
Array.slice(start, end) `gives new array, copies elements from index start till end (not inclusive) into it.`
Array.concat(...items) `gives new array, If any of items is an array, then its elements are taken.`

// To search among elements:

Array.indexOf/lastIndexOf(item, pos) `look for item starting from position pos, return the index or -1 if not found.`
Array.includes(value) `returns true if the array has value, otherwise false.`
Array.find(func) `filter elements through the function, return first/all values that make it return true.`
Array.filter(func) `filter elements through the function, return first/all values that make it return true.`
Array.findIndex() `is like find, but returns the index instead of a value.`
Array.valueOf() `Returns the primitive value of the specified object`

// To iterate over elements:

Array.forEach(func)  `executes a provided function once for each array element// arr.forEach(item => {console.log(item)})`
Array.map(func)  `creates a new array from results of calling func for every element.`
Array.sort(func) `sorts the array in-place, then returns it.`
Array.reverse()  `reverses the array in-place, then returns it.`
Array.split() `convert a string to array and back.`
Array.join() `turns array into string`
Array.sort() `sorts elements alphabetically`
Array.reduce/reduceRight(func, initial) `calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.`


// Additionally:
// Array.isArray(arr) checks arr for being an array.
// sort, reverse and splice modify the array itself.

Array.some()
Array.split()
Array.every()


String.indexOf()
String.slice()
String.Split()

Object.keys()
Object.values()
Object.hasOwnProperty()