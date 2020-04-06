/*
Directions:
Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
*/

// Started with an if statement and two else ifs but decided to use the tenary operator. Begginning to like the little bugger

var num = 10;

while (num >= 1) {
	console.log ( (num === 1) ? ( (num) + " bottle of juice on the wall! " + (num) + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!" ) : ( (num === 2) ? ( (num) + " bottles of juice on the wall! " + (num) + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!" ) : ( ( (num) + " bottles of juice on the wall! " + (num) + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!" ) ) ) );
	num = num - 1;
}