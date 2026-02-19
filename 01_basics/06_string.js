const name = "Rohit";
const repoCout = 50;

// console.log(name + repoCout);

// console.log(`Hello my name is ${name} and my repocount is ${repoCout}`);  // String interpolation

const gameName = new String("Rohit kumar "); // String object
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length); // 12 
// console.log(gameName.toUpperCase()); // ROHIT KUMAR 
// console.log(gameName.charAt(2)); // h
// console.log(gameName.indexOf('t'));//4

const newgameName = gameName.substring(0,5);
// console.log(newgameName); // Rohit

const newgameName1 = gameName.slice(-12,5);
// console.log(newgameName1);

const newgameName2 = "    Rohit kumar     ";
// console.log(newgameName2);
// console.log(newgameName2.trim()); // "Rohit kumar"

const url = "https://www.youtube.com/channel/UCWwqHwqLSYp8j9yYc1gBKg";
// console.log(url);
// console.log(url.replace("channel", "c")); // https://www.youtube.com/c/UCWwqHwqLSYp8j9yYc1gBKg

// console.log(url.includes('c'));

const link = "Rohit-kumar-kumawat-1234567890";
console.log(link.split('-'));








