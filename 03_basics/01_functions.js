function sayMyName() {
    console.log("My name is Lucas");
}

// sayMyName(); // Calling the function to execute its code

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2); // Returning the sum of num1 and num2
}

// addTwoNumbers(3, 5); // Calling the function with arguments 3 and 5 to get the result 8

const result = addTwoNumbers(10, 20); // Calling the function and storing the result in a variable

// console.log(result); // This will log undefined because the function does not return a value, it only logs the sum to the console

function addTwoNumbers(num1, num2) {
    return num1 + num2; // Returning the sum of num1 and num2
}

const result1 = addTwoNumbers(10, 20); // Calling the function and storing the result in a variable

// console.log(result1); // This will log 30, which is the sum of 10 and 20

function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rohit"));
// console.log(loginUserMessage());// This will log "undefined just logged in" because the function is called without an argument, so username is undefined

function loginUserMessage(username) {

    if(username === undefined) {
        return "Please provide a username"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400,500));

const user = {
    name: "Rohit Kumar",
    age: 30
}

function headUser(anyuser)
{
    console.log(`Username is ${anyuser.name} and age is ${anyuser.age}`);
}

// headUser(user)

// headUser( user1 = {
//     name: "Rohit Kumar",
//     age: 30
// })





const myArray = [1, 2, 3, 4, 5];

function returnSecondValue(arr) {
    return arr[1]; // Returning the second value of the array (index 1)
}

console.log(returnSecondValue(myArray)); // This will log 2, which is the second value of the array