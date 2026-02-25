// object literals


const symbol1 = Symbol("id");

const jsUser = {
  name: "Rohit",
  "Full nmae" : "Rohit Kumar",
  [symbol1] : "mysymbol1",
  age: 18,
  location: "India",
  email :"rohit@example.com"
}



// console.log(jsUser.email);
// console.log(jsUser['email']);

// console.log(jsUser.Full nmae);//can not access because of space in key name
// console.log(jsUser["Full nmae"]);

console.log(jsUser[symbol1]);

jsUser.age = 19; // update age


// Object.freeze(jsUser); // freeze the object  


jsUser.greeting = function() {
  console.log("hello ");
}

jsUser.greeting = function() {
  console.log(`hello ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting()); // Call the function to see the output in the console.





