/*
Define an objects

*/
var umbrella = {
  color: "pink",
  isOpen: false,
  // function to close the umbrella
  open: function() {
  	if(umbrella.isOpen) {
  		return "The umbrella is already opened!";
  	} else {
  		umbrella.isOpen = true;
  		return "Julia opens the umbrella";
  	}
  },
  // function to close the umbrella
  close: function() {
    if (!umbrella.isOpen ) {
  		return "Umbrella is already closed!";
  	} else {
  		umbrella.isOpen = false;
  		return "Julia closes the umbrella";
    }
  }
};

console.log(umbrella.close());
