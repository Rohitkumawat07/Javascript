const user = {
    username: "Rohit",
    price: 99,
    WelcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }
}

// user.WelcomeMessage();
// user.username = "Rahul";
// user.WelcomeMessage();

// console.log(this);


// function chai() {
//     let username = "Rohit";
//     console.log(this);
//     console.log(this.username);// undefined ,because this is not referring to the user object, it is referring to the global object (window in browser) where username is not defined.
//     // this not work in function it is work in object because in object this refer to the object but in function this refer to the global object (window in browser) where username is not defined.
// }

// chai();

//Arrow function
// const chai = () => {
//     let username = "Rohit";
//     console.log(this);
//     console.log(this.username);
// }
   
// chai();

// const addTwo =(num1,num2) =>{
//     return num1 + num2;
// }

// const addTwo =(num1,num2) => num1 + num2;
// const addTwo =(num1,num2) => (num1 + num2);
const addTwo =(num1,num2) =>  ({sum: num1 + num2});

console.log(addTwo(2,3));


