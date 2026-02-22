/**
onst promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB Call, cryptography, network

    setTimeout(function () {
        console.log("Async task is Complete");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise taks");

})  **/


/**
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async task 3");

})
 **/

/**
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Rohit', email: 'rohit@gmail.com' })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})

 **/


/** 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'Rohit', email: 'rohit@gmail.com' })
        } else {
            reject('ERROR : sumthing')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);

}).finally(()=>{
    console.log('the promisr is resolve ither reject');
    
})
**/



/**

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'Rohit', email: 'rohit@gmail.com' })

        }
        else {
            reject('ERROR : js went wrong');
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()

**/


// async function getAllUsers() {
//    try {
//      const response = await fetch('https://api.github.com/users/mojombo')
//     const data =await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E :",error);
//    }
// }
// getAllUsers();


fetch('https://api.github.com/users/mojombo').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);

}).catch((error) => console.log(error));