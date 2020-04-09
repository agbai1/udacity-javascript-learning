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
     console.log("Printing: laugh was called and " + num + " was passed in as an argument.");
     return "Returning: I am returning this string: " + message;
 }

laugh(4);
