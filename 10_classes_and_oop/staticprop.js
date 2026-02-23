class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username ${this.username}`);
        
    }

   static  createId(){
        return '123'
    }
}

const rohit = new user('rohit')
console.log(rohit.createId());
