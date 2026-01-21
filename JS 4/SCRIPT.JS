// let numbers = [1, 3, 5, 7, 9];
// let hasEven = numbers.some(x => x % 2 === 0);
// console.log(hasEven); // false

let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(x => x % 2 === 0); 
console.log(allEven); // true

// spread operaotor example
let fruits1 = ["apple", "banana"];
let fruits2 = ["cherry", "orange"];
let combined = fruits1.concat(fruits2); // ["apple", "banana", "cherry", "orange"]
console.log(combined);

// // ternary operator example

// condition ? true : false; {syntax}

let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);

//find out the number is even or odd 
let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

//chech if the year is leap year or not
// let year = 2021;
// let isLeap = (year % 4 === 0) ? (year % 100 !== 0 || year % 400 === 0) ? "Leap Year" : "Not a Leap Year";
// console.log(isLeap);


//anonymous function example

//setTimeout(callback, delay); (syntax)

// setTimeout(function() {
// console.log("Hello, world!");
// }, 1000);

// Self invoking function example

// (function() {
//     console.log("This is an IIFE.");
// })();