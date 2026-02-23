class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username , email, password){
        super(username)
        // this.username = username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course Added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai",'c@gmail.com','123')

chai.addCourse();

const masalaChai = new User("massa");
masalaChai.logMe();