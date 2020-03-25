// function loveJavascript() {
//     console.log("I love JavaScript!")
// }

// loveJavascript()

// // Lightning Exercise
// // Dream Vacation
// // Write a function that accepts two parameters of name and destination.

// function travelLog(name, destination) {
//     console.log(`${name} can't wait to go to ${destination}`)
// }

// travelLog ("Swathi", "India")
// travelLog ("Hank", "Disney World")
// travelLog ("Paul", "the beach")
// // The function should log a sentence to the console about where that person wants to go.
// // Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.


// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)

function tacoTruck(typeOfShell, topping) {
    var madeTaco = `Your ${typeOfShell}taco with ${topping} is ready!`
    return madeTaco
}
var finishedTaco = tacoTruck("hard ", "steak")
console.log(finishedTaco)
// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence.
// Execute the function.
// Log the returned sentence to the console.

// // Write a function called add. It should accept two numbers as parameters and log their sum to the console.
// function add(number1, number2) {
//     console.log(number1 + number2)
// }
// add(2, 2)
// // Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
// function subtract(number1, number2) {
//     console.log(number1 - number2)
// }
// subtract(5, 3)
// // Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
// function multiply(number1, number2) {
//     console.log(number1 * number2)
// }
// multiply(6, 6)
// // Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
// function divide(number1, number2) {
//     console.log(number1 / number2)
// }
// divide(9, 3)
// // Call each function three times with different parameters.
// add (4, 5)
// add (3, 16)
// add (40, 5)
// subtract (6, 4)
// subtract (67, 32)
// subtract (-1, 4)
// multiply(12, 4)
// multiply (11, 11)
// multiply (34, 9)
// divide (49, 7)
// divide (1025, 5)
// divide (188, 4)

// Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.
// function add(number1, number2){
//     var sum = number1 + number2
//     return sum
// }
// var something = add(1, 2)
// console.log (something)

// function subtract(number1, number2) {
//     var difference = number1 - number2
//     return difference
// }
// var diff = subtract(7,1)
// console.log(diff)

// function multiply(number1, number2) {
//     var product = number1 * number2
//     return product
// }
// var prod = multiply(6, 4)
// console.log(prod)

// function divide(number1, number2) {
//     var dividend = number1 / number2
//     return dividend
// }
// var divid = 55 / 11
// console.log(divid)

// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.
function greetings(name, language) {
    
}
