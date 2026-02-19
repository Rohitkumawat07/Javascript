// SingletonObj.

//  const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Rohit";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "rk@g.com",
    fullname: {
        userfullname: {
            firstname: "Rohit",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = { 1: "one" };
const obj2 = { 2: "two" };

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2); // Merge obj1 and obj2 into a new object

const obj3 = { ...obj1, ...obj2 }; // Using spread operator to merge obj1 and obj2 into a new object

// console.log(obj3);

const user1 = [
    { userId: 1, name: "Rohit" },
    { userId: 2, name: "Kumar" }
]

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwn(tinderUser, "name")); // Check if the property "name" exists in tinderUser


//=============== Destructuring of objects=======+++++++========

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Rohit Kumar"
}

const { courseInstructor: instructor } = course; // Destructuring assignment to extract courseInstructor and rename it to instructor

console.log(instructor); 