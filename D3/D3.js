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
Create and array containing the first 5 positive numbers.
*/

console.log("---------E1---------")
const listOfNumbers = [1, 2, 3, 4, 5]
console.log(listOfNumbers)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

console.log("---------E2---------")
let myDetails = {
    name: "Tommy",
    surname: "Knight",
    email: "stopbeingnosy@hotmail.com",
    age: "28"
}
console.log(myDetails)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

console.log("---------E3---------")
myDetails.license = true
console.log(myDetails)

/* EXERCISE 4

Remove from the previously created object the age property.
*/

console.log("---------E4---------")
delete myDetails.age
console.log(myDetails)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("---------E5---------")
let yourDetails = {
    name: "Delightful",
    surname: "Human",
    email: "boyslikeflowerstoo@hotmail.com",
}
console.log(yourDetails)
if (yourDetails.email === myDetails.email){
    console.log("Same Email")
}
else{
    console.log("New Email")
}


/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("---------E6---------")
let totalShoppingCart = 60
console.log("Your items total £" + totalShoppingCart)
if (totalShoppingCart >= 50){
    console.log("Congratulations, you're eligible for free shipping, your total is £" + totalShoppingCart)
}
else{
    console.log("Shipping costs £10, your total checkout cost is £" + (totalShoppingCart + 10))
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("---------E7---------")
console.log("Your items total £" + totalShoppingCart)
console.log("Today is black Friday! You get 20% off!")
let CheckoutPrice = (totalShoppingCart *0.8)
if (totalShoppingCart >= 50){ //important to enable free shipping BEFORE applying discount
    console.log("Congratulations, you're eligible for free shipping, your total is £" + CheckoutPrice)
}
else{
    console.log("Shipping costs £10, your total checkout cost is £" + (CheckoutPrice + 10))
}


/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("---------E8---------")
const car1 = {
    brand: "Mini Cooper",
    model: "Sidewalk Classic",
    licensePlate: "1MC0D1NG"
}
const car2 = Object.assign({}, car1)
const car3 = Object.assign({}, car1)
const car4 = Object.assign({}, car1)
const car5 = Object.assign({}, car1) //I had trouble condensing this section, commas weren't being my friend.
car5.licensePlate = "5F1NG3R5"
car4.licensePlate = "4GETT1NG"
car3.licensePlate = "3BOTTL3S0FB33R0NTH3W4LL"
car2.licensePlate = "2H0T4U"
console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)
console.log(car5)


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

console.log("---------E9---------")
carsForRent = [car1, car2, car3, car4, car5]
console.log("Number of cars available to rent: " + carsForRent.length)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

console.log("---------E10---------")
carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log("---------E11---------")
console.log("Brand is saved as a " + typeof car1.brand)
console.log("Model is saved as a " + typeof car1.model)
console.log("License Plate is saved as a " + typeof car1.licensePlate)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

console.log("---------E12---------")
carsForSale = []
const bigCar = {
    brand: "Monster",
    model: "Truck",
    licensePlate: "CRUSHY0U"
}
const smallCar = {
    brand: "Reliant",
    model: "Robin", 
    licensePlate: "3WH33L3R"
}
const cardboardBoxCar = {
    brand: "Bat",
    model: "Mobile",
    licensePlate: "WUHANW4RR10R"
}
carsForSale.push(bigCar, smallCar, cardboardBoxCar)
let sumCars = (carsForSale.length + carsForRent.length)
console.log("There are currently " + sumCars + " cars in the garage")

    /* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
console.log("---------E13---------")
console.log(carsForSale)

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/

//let myFeelings = "For You" ? "I love you" : "I hate you"
//console.log(myFeelings)