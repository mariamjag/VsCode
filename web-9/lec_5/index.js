// callBack 
// Anonymous 
// Recursive


// function myName(){
//     return"Hello"
// }
// console.log(myName())

// (function (){
//     console.log("Hello")
// })();

// const foo = function(){
//     return 10;
// }
// console.log(foo());

function myName(callBack){
    return callBack();

}

function sayMyName(){
    return console.log("Hello");

}

sayMyName();