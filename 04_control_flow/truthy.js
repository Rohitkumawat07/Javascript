// const userEmail = "rowvnd@SVGDefsElement.com";

// if (userEmail) {
//     console.log("You have an email");
// } else {
//     console.log("Please provide an email");
// }

// falsy value 

// false ,0 ,-0, BigInt 0n, "", null, undefined, NaN

// truthy value

// "0", " ", [], {}, function(){}, new Date(), -0, -0n, Infinity, -Infinity ,"false", "null", "undefined", "NaN"

// if(userEmail.length === 0){
//     console.log("You have an email");
// }

// const user = {}

// if(Object.keys(user).length === 0){
//     console.log("User object is empty");
// } else {
//     console.log("User object is not empty");
// }


// NUllish coalescing operator (??) : null or undefined

// let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? 10 ?? 20;
// console.log(val1);


// Ternary operator

// condition ? expression1 : expression2

const age = 18;


const canVote = age >= 18 ? "You can vote" : "You cannot vote";

console.log(canVote);