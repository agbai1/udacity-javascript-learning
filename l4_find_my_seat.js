/*
Directions:
Theater seats often display a row and seat number to help theatergoers 
find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) 
in each row, write a nested for loop to print out all of the different 
seat combinations in the theater.
*/

// Write your code here

for (let row = 0; row < 26; row++) {
	for (let seat = 0; seat < 100; seat++) {
		console.log(row + "-" + seat);
	}
}
