/*
Directions:
For this quiz, you're going to create a function called 
buildTriangle() that will accept an input (the triangle 
at its widest width) and will return the string representation
 of a triangle. See the example output below.
*/

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
   for (var j = 1; j <= length; j++) {
      line += "* "
  	}

    return line + "\n";
}

// creates a function that reproduces the makeLines 'x' number of times
// on a new line

function buildTriangle(x) {
let triangle = "";
  for (let i = 1; i <= x; i++) {
    triangle += makeLine(i);		// stores all lines in one stack
  }
  return triangle;					// returns of stacked lines which forms the triangle
}

console.log(buildTriangle(10));
