const accountId = 1234567890;
let accountEmail = "Rohit@google.com";
var accountPassword = "12345"; // var is function scoped and can be redeclared and updated and it is ote use becouse of issue in block ad function scope
accountCity = "Jaipur";
let accountState; // undefined


// accountId =2;  // TypeError: Assignment to constant variable.

accountEmail = "rohit@gmail.com";
accountPassword = "123456";
accountCity = "Delhi";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);  
console.log(accountState);
 
