// IIFE (Immediately Invoked Function Expression)

(function chai(){
    console.log('Db');
})();


(()=> {
    console.log('Db connected');
})();

((name)=> {
    console.log(`Db connected ${name}`);
})('Rohit')