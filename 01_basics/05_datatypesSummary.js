// Primtive

// 7 types: String, NUmber, Boolean,null, undefined, Symbol, BigInt

const score = 100; // number
const scoreValue = 100.5; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined
const id = Symbol("123");// symbol
const anotherId = Symbol("123");
const bigNumber = 34567890123456789012345678901234567890n; // BigInt

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);



// Non-primitive(Referance type): Object, Array, Function

const heros = ["Shaktiman", "Bheem", "Chhota Bheem"]; // Array
let myObj = {
    name: "Shaktiman",
    power: "All"
};

const myfun = function (){
    console.log("Hello World");
}


console.log(typeof myObj);
