/*
Directions:
Use the map() method to take the array of bill amounts shown
 below, and create a second array of numbers called totals 
 that shows the bill amounts with a 15% tip added.

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11,
 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
Print out the new totals array using console.log.
*/

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11,
 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

 var totals = bills.map(function(num) {
   let totalBill = 0;
   totalBill += num * .15;
   return Number(totalBill.toFixed(2));		// Makes it a 2 decimal places, then casts it as a Number 
   											// because .toFixed() returns a string 
 } );

console.log(totals);