let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth()); // 0-11
// console.log(myDate.getDate());
// console.log(myDate.getDay()); // 0-6
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());


// console.log(typeof myDate);

// let myCreatedDate = new Date(2020, 0, 1); // Month is 0-based (0 = January)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2020, 0, 1, 10, 30, 0); // Month is 0-based (0 = January)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now(); // gives the number of milliseconds since January 1, 1970
// console.log(myTimestamp);

let newDate = new Date(myTimestamp);
newDate.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); // gives the date in a specific format

console.log(newDate);



