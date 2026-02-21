// for of
// for in     =  object

const arr = [1, 2, 3, 4, 6]

for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello rohit"
for (const greet of greeting) {
  // console.log(greet);

}

// ===============  maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "UnitedState")

// console.log(map);

for (const key of map) {
  // console.log(key);
}

for (const [key, value] of map) {
  // console.log(key);
}





const myObj = {
  "g": "G",
  "t": "T"
}

// for (const [key, value] of myObj){
//   console.log(key);
// }

// for of loop not work on object 
// use for in loop

for (const key in myObj
) {
  // console.log(key);
  // console.log(myObj[key]);

}

const arr1 = [1, 2, 3, 4, 5]

for (const key in arr) {
  // console.log(key);
  // console.log(arr[key]);

}


// = = = = =  = = forEach loop = = = = =

const coding = ["js", "ruby", "python"];

coding.forEach(function (val) {
  // console.log(val);
})

coding.forEach((item) => {
  // console.log(item);

})

function printMe(item) {
  // console.log(item);
}

coding.forEach(printMe)


coding.forEach((item, index, arr) => {
  // console.log(item ,index, arr);

})



const mycoding = [{
  s: "S",
  a: "A"
},
{
  s: "S",
  a: "A"
}, {
  s: "S",
  a: "A"
}, {
  s: "S",
  a: "A"
}, {
  s: "S",
  a: "A"
}, {
  s: "S",
  a: "A"
}
]

mycoding.forEach((item) =>{
  console.log(item.a);
  
})
