/*
Instructions:
for loops
Declare a variable named myArray and assign it to the value of an array literal

Using a for loop, and the push method, push into the array the numbers 1 thru 20;
For loops (cont...)
*/
var myArray = [];
for (var i = 0; i <= 20; i++) {
console.log(myArray.push(i));
}













/*
Inside the function printer, create a for loop that prints all of the values in 
myArray in reverse to the console
*/
function printer(){

for (var i = myArray.length - 1; i >= 0; i--) {
console.log(myArray[i]);

}

}










/*
For in loops
Declare a variable named myObject and assign it the value of an object literal.


Using dot notation, add three keys, first, second, and third and assign to each key 
the value of a 10, 20, and 30
*/
var myObject = {};
myObject.first = 10;
myObject.second = 20;
myObject.third = 30;









/*
Using a for in loop, and the addition assignment(+=) operator, add five to each value in myObject
*/
for (var key in myObject) {

myObject[key] += 5;

}