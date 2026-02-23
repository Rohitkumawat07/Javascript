// Object literal

const user ={
    username : "Rohit",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("got user details from database");
        // console.log(`username : ${this.username}`);
        // console.log(this);
        
        
    }
    
}

// console.log(user.username);
// console.log(user.getUserDetails());


//===========++++++++++ Constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // return this
}

// const userOne= User('rohit',9,true)
// const usertwo =User('Roshan' ,10,false)// jab new keyword add nhi kare hai to userOne ki value ko usertwo override kar deta hai jo ki nhi karna s liye new keyword use karte 

const userOne= new User('rohit',9,true)
const usertwo =new User('Roshan' ,10,false)
console.log(userOne);


// new =>
// 1.create new object 
// 2.constructer function create 
// 3.add in this

