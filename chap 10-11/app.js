// ....................................chap10-11............................................

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of 

// let city = prompt("Enter your city name");
// if (city === "karachi") {
//     document.write("Welcome to city of lights ");
// } else {
//     document.write("Welcome to " + city);
// }

// 2.Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the  user is female, give the message: Good Morning  Ma’am.

// let gender = prompt ("Enter your gender please!");
// if (gender === "male") {
//     document.write ("Good Morning Sir");
// } else {
//     document.write ("Good Morning Mam");
// }

// 3.Write a program to take input color of road traffic signal from the user & show the message according to this tab Signal color Message
// Red      Must Stop
// Yellow   Ready to move
// Green    Move now
//  answer on index page

// 4.Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”.
// let remainingFuel = prompt ("Enter the remaining fuel (in litres):");
// if (remainingFuel < 0.25 ) {
//    document.write ("Please refill the fuel ");
// } else {
//     document.write ("your fuel level is sufficient.");
// }

// 7 Guess game:Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number..
// let secretNumber = Math.floor(Math.random() * 10)+1;
// let userGuess = parseInt(prompt ("guess the secret number between 1 to 10:"));
// if (userGuess === secretNumber) {
//   alert("wowwwwwww! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("close enough to the correct answer");
// } else {
//     alert("Sorry, try again the secret number was " + secretNumber);
// }

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
// let number = prompt("please enter a number to check if its divisible by 3:");
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }

// 9.Write a program that checks whether the given input is an even number or an odd number.
// let number = prompt ("Enter a number to check if its even number or odd:");
// if (number % 2 === 0) {
//     alert (number + " is an even number")
// } else {
//     alert(number + " is an odd number");
// }

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is  too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = prompt ("Enter the temperature");
// if (temperature > 40) {
//    alert("“It is  too hot outside.")
// } else if (temperature > 30) {
//     alert ("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert ("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert ("waoh! Today’s weather is so Cool.");
// } else {
//     alert("It's very hot today.");
// }

// 11.Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let firstNumber = parseFloat(prompt("Enter a first number"));
// let secondNumber = parseFloat(prompt("Enter a second number"));
// let operation = prompt("Enter the operation you want to perform (+, -, *, /, %)");

// let result;

// if (operation === "+") {
//   result = firstNumber + secondNumber;
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
// } else if (operation === "/") {
//   result = firstNumber / secondNumber;
// } else if (operation === "%") {
//   result = firstNumber % secondNumber;
// } else {
//   result = "Invalid operation.";
// }
// alert("The result is: " + result);

// ...................................The end.....................................

