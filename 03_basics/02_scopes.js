// let a =10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
}

// console.log(a); // This will throw an error because 'a' is not accessible outside the if block
// console.log(b); // This will throw an error because 'b' is not accessible outside the if block
// console.log(c); // This will log 30 because 'c' is accessible outside the if block due to var being function-scoped



function one(){

    const username = "Rohit Kumar";

    function two(){
        const message = "Hello World";
        console.log(username); // This will log "Rohit Kumar" because the inner function 'two' has access to the variables of its outer function 'one' due to closure
    }
    // console.log(message); // This will throw an error because 'message' is not accessible in the outer function 'one'
    two(); // Calling the inner function 'two' to log the username
}

// one(); // Calling the outer function 'one' to execute the code and see the scope in action


if (true) {
    const username = "Rohit Kumar";
    if(username === "Rohit Kumar") {
        const message = "Hello World";
        // console.log(username); // This will log "Rohit Kumar" because 'username' is accessible within this block
        // console.log(message); // This will log "Hello World" because 'message' is accessible within this block
    }
    // console.log(message); // This will throw an error because 'message' is not accessible outside the inner if block
}



//===============================

function addone(num){
    return num + 1;
}

addone(5);

const addTwo = function(num){
    return num + 2;
}
addTwo(5);
