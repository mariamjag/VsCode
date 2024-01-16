// if(isLogedin.email !== "" && isLogedin.password !== ""){
//     console.log("დაარეგისტრირე");
// }else{
//     console.log("უნდა დარეგისტრირდე");
// }

// const user_data = {
//     email:"mari@gmail.com",
//     password:"12345678",
// };

// switch (user_data.email && !user_data.password) {
//     case "mari@gmail.com":
//         console.log("ნაპოვნია")
//         break;
//         case: "12345678":
//         console.log("მომხმარებელი ნაპოვნია");
//         break;
//     default:
//         break;
// }

// let num = Number(prompt("enter something.."));

// let int = 20;
// let floatNum = 20.5;
// console.log('${int}  ${floatNum}');

// console.log(num)
// if (num > 0 ) {
//     console.log("დადებითი")
// }else if(num < 0){
//     console.log("უარყოფითი")
// }else{
//     console.log("რიცხვი ნაპოვნი არ არის")
// };
// function myName(){
//     let num = 10;
//     console.log("result is", num *10);
// }
// myName();

//პარამეტრი - function addNum(a, b){return a+b ;}  პარამეტრია ა და ბ
//არგუმენტი -  let result = addNum(10, 25) //35  არგუმენტია 

// function myName(names)//პარამეტრი
//     {console.log("js para", names);
// }
// myName(mari);//არგუმენტი

//es5:
// function myName(names,age,email,address){
//     console.log([names,age,email,address]);
// }
// myName("mari", 25, "mari@gmail.com" , "Tbilis")

// let date = new Date();
// console.log(date);

// function myName(names,age,email,address){
//     let user_array = [names,age,email,address];
//     return user_array;
//     console.log("heelll");
// }
// console.log(myName("mari", 25, "mari@gmail.com" , "Tbilis"))

//es6:
// const myName = (names, age) => {
// let myName = names;
// let myAge = age;
// return `my name is ${myName} and i'm ${myAge}`
// }
// console.log(myName("Mari",25));

// const fruits = (fruit) => {
//     switch (fruit) {
//         case "ვაშლი":
//             console.log(`${fruit} არის მწვანე`)
//             break;
//             case "მსხალი":
//             console.log(`${fruit} არის ყვითელი`)
//             break;
//         default:
//             console.log("არცერთი ხილია ნაპოვნი")
//             break;
//     }
// }
// fruits("მსხალი")

// const user_info = (names,lastname, age, proffesion, address) => {
//     let userName = names;
//     let userLastName = lastname;
//     let userAge = age;
//     let userProffesion = proffesion;
//     let userAddress = address;
// return `my name is ${userName} ${userLastName}, ${userAge} years old and I am ${userProffesion}. I am from ${userAddress}. `
// }
// console.log(user_info("Mariam", "Jagmaidze", 25, "psychologist", "Tbilisi"))


// function user({name, age}){
// return `${name} and ${age}`
// }

// console.log(user({name:"mari", age:25}))