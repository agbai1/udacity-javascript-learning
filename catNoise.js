
function cat() {
  
  // console.log(purr());		// will print `purrrrrr!` becuase function purr() will be 
  								// hoisted because its a function declation
  
  console.log(meow(2)); 		// will cause a syntax error because meow function wasn't 
  								// hoisted to the top because it is a function expression 
  var meow = function(max) {
  	var catMessage = "";
  	for (let i = 1; i <= max; i++) {
  	  meow += "meow ";
  	}
  	return catMessage;
  }

    function purr() {
    var purr = "purrrrr!";
     return purr;
  }
}

cat();		// function call