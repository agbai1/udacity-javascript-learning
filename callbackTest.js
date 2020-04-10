function purr(callbackFunc) {
  var purr = "purrrrr";
  return "Cats " + purr + "and " + callbackFunc();
}

var meow = function(max) {
  var catMessage = "";
  for (let i = 0; i < max; i++) {
  	 catMessage += "meow ";
  }
  return catMessage;
}

purr(meow);		// function call


// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function purr(messageFunction, number) {
  messageFunction(number);
}

var meow = function(max) {
  var catMessage = "";
  for (let i = 0; i < max; i++) {
  	 catMessage += "meow ";
  }
  console.log("Cats " + catMessage);
}

// Call the movies function, pass in the function and name of movie
purr(meow, 2);



