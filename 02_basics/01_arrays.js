 const myArray =[1,2,3,4,5,6];
//  console.log(myArray[0]);

 const myArray2 = new Array(1,2,3,4,5,6);
//  console.log(myArray2[0]);

// console.log(myArray.length); // 6
console.log(myArray);


// Array methods
myArray.push(7);
// console.log(myArray);
myArray.pop();
// console.log(myArray);

// myArray.unshift(0);
// console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.splice(2,0,10); // adds 10 at index 2
// console.log(myArray);

// console.log(myArray.includes(2));
// console.log(myArray.indexOf(6));

const newArray = myArray.join();
// console.log(newArray); // "1,2,10,3,4,5,6"
// console.log(typeof newArray);

console.log("A",myArray);

const newArray2 = myArray.slice(2,5);
console.log("B",newArray2);


const newArray3 = myArray.splice(2,5);
console.log("C",newArray3);





 