/*
Directions:
In an earlier exercise, you created a crew 
array to represent Mal’s crew from the hit 
show Firefly.
Later in the show, Mal takes on three new 
crew members named "Simon", "River", and "Book". 
Use the push() method to add the three new crew 
members to the crew array.

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

*/

// Names of crew members
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// Add all crew members to an array called crew
var crew = [captain, second, pilot, companion, mercenary, mechanic];

// New crew member to be added to crew array
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// Add three new members to crew
crew.push(doctor, sister, shepherd);

console.log(crew);


