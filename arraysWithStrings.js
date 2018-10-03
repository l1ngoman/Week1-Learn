// Arrays of Strings
// Create an array with your siblings names, and an array with your parents names.
//
// Sort your siblings names in alphabetical order.
//


var siblings = ["Adam", "Ibrahim", "John", "Nawal", "Lauren"];
//
// console.log(siblings.sort());

// Sort your parents names in reverse alphabetical order.
//
var parents = ["Mary", "Mohamed", "Tom", "Connie"];
//
// console.log(parents.sort().reverse());

// Sort all the names in alphabetical order.
//

var family = siblings.concat(parents);

//console.log(family.sort());

// Hint: Combine the arrays into a single array.
// Sort all the names in reverse alphabetical order.
//
// Create a function that determines if a given name is amongst the names.

console.log(family.includes("John"));
console.log(family.includes("Joe"));
