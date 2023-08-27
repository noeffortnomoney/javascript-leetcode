const createHelloWorld = function(){
    return function(...args){
        return 'Hello World';
    }
}
var f = createHelloWorld();
console.log(f());