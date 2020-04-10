/*
Directions:
Create a function called hasEnoughPlayers() that 
takes the team array as an argument and returns 
true or false depending on if the array has at 
least seven players.
*/

function hasEnoughPlayers(team) {
  var isEnough = false;
  console.log(team);
  var numOfPlayer = team.length;
  console.log(team.length);
  if (numOfPlayer >= 7) {
  	isEnough = true;
  }
  return isEnough;
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));