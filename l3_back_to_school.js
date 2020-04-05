/*
In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.
*/


var education = "a high school diploma";
var output = "In 2015, a person with ";

var salary = 0;

switch (education) {
	case "no high school diploma" : 
		salary = 25636;
		output += education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.";
		break;
	case "a high school diploma" :
		salary = 35256;
		output += education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.";
		break;
	case "an Associate's degree" :
		salary = 41496;
		output += education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.";
		break;
	case "a Bachelor's degree" :
		salary = 59124;
		output += education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.";
		break;
	case "a Master's degree" :
		salary = 69732;
		output += education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.";
		break;
	case "a Professional degree" :
		salary = 89960;
		output += education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.";
		break;
	case "a Doctoral degree" :
		salary = 84396;
		output += education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.";
		break;
}

console.log(output);

// CODE TO PASS UDACITY TEST

// your code goes here
switch (education) {
	case "no high school diploma" : 
		salary = 25636;
		console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year." ) ;
		break;
	case "a high school diploma" :
		salary = 35256;
		console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year." ) ;
		break;
	case "an Associate's degree" :
		salary = 41496;
		console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year." ) ;
		break;
	case "a Bachelor's degree" :
		salary = 59124;
		console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year." ) ;
		break;
	case "a Master's degree" :
		salary = 69732;
		console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year." ) ;
		break;
	case "a Professional degree" :
		salary = 89960;
		console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year." ) ;
		break;
	case "a Doctoral degree" :
		salary = 84396;
		console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year." ) ;
		break;
}
