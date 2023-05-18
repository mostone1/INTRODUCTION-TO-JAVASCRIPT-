//task 2

console.log("Vladislav Danilchenko");

//task 3

//a

let a = 10;

//b

let b = 20;

//c

console.log(a+b);

//d

a = b

//e

console.log(a)

//task 4

const newArr = ["Vlad", 26, true, undefined, null]

//task 5

function coniform() {
    let isAdult = prompt("How old are you?")
    console.log(isAdult)
}

coniform()

//task 6

let firstName = "Vladisalv";
let secondName = "Danilchenko";
let group = "U-1";
let birthAge = 1997

let familyStatus = false;

console.log(typeof birthAge);
console.log(typeof familyStatus);
console.log(typeof firstName);
console.log(typeof secondName);
console.log(typeof group);


const nothing = null;
const unknow = undefined;

console.log(nothing);
console.log(unknow);

//task 7

function user() {
    let name = prompt("Enter your login");
    let email = prompt("Enter your email");
    let password = prompt("Enter your password");
    alert("Dear " + name + " your email is " + email + " , your password is " + password);
}

user()

//task 8

let seconds = 60;
let secondsInHour = seconds * 60;

alert(secondsInHour);

let secondsInDay = secondsInHour * 24;

alert(secondsInDay);

let secondsInMonth = secondsInDay * 31;

alert(secondsInMonth);

