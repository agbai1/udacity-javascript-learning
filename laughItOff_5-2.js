/*
Directions:
Write a function called laugh() that takesone parameter, 
num that represents the number of "ha"s to return.
*/

function laugh(num) {
     let message = "";
     for (let i = 0; i < num; i++) {
         message += "ha";
     }
     message += "!";
     return message;
 }

console.log(laugh(4));
