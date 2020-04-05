/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
This file shows the code for lesson_3_quiz
navigating the food chain
*/
var eatsPlants = true;
var eatsAnimals = false;

if (eatsPlants && eatsAnimals) {
	console.log("omnivore");
}  else if (eatsPlants) {
	console.log("herbivore");
} else if (eatsAnimals) {
	console.log("carnivore");
} else {
	console.log(undefined);
}

var category = eatsPlants && eatsAnimals ? "omnivore" : ( eatsPlants ? "herbivore" : ( eatsAnimals ? "carnivore" : undefined ) );

console.log(category);
