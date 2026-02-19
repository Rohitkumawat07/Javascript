const marval_heros = ["Spiderman", "Ironman", "Thor", "Captain America"];
const dc_heros = ["Superman", "Batman", "Wonder"];

// marval_heros.push(dc_heros);
// console.log(marval_heros);
// console.log(marval_heros.length);
// console.log(marval_heros[4]);
// console.log(marval_heros[4][1]);

// const allHeros = marval_heros.concat(dc_heros);
// console.log(allHeros);

// Using spread operator (ES6+)
const allHeros = [...marval_heros, ...dc_heros];
// console.log(allHeros);

const anotherArray = [1,2,[3,4],5,[6,7,[8,9]]]

const real_anotherArray = anotherArray.flat(2);
// console.log(real_anotherArray);

console.log(Array.isArray("Rohit"));
console.log(Array.from('Rohit'));
console.log(Array.from({name: 'Rohit'})); // This will return an empty array since it's not iterable

let score1 =100;
let score2 = 200;
let score3 = 300;

console.log([score1, score2, score3]);

