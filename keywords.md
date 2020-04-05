## Important keywords in javascript

* stringName.chatAt(index) - gives you the index value of a string

* ` \ ` speacial character is used for escaping strings. e.g.
  "The man whispered, "please speak to me."" should be 
  "The man whispered, \"please speak to me.\""

Other special characters
\\	\ (backslash)
\"	'' (double quote)
\'	' (single quote)
\n	newline
\t	tab

`varName.toFixed(2)` - rounds to 2 decimal places

* ***short-circuiting*** describes he event when later arguments in a logical expression are not considered because the first argument already satisfies the condition.

* The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

`for example:
var isGoing = true;
var color;
if (isGoing) {
  color = "green";
} else {
  color = "red";
}`

console.log(color);

can be rewritten as
`var color = isGoing ? "green" : "red";
			conditional ? (if condition is true) : (if condition is false)`