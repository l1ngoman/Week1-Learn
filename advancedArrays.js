// Advanced Functions
// Create a function that returns an array with only the even elements from the array.
//
// evenElements([1,2,3,4]) should return [2,4]
// Hint: use the % operator
// What happens if there are no even numbers?

var numbers = [1,2,3,4,5];
//
// function evenElements(arr){
//   var test = [];
//   arr.forEach(function(element){
//     if(element % 2 == 0){
//       test.push(element);
//     }
//
//   })
//   if(test.length<1){
//     console.log("no even numbers in array");
//   } else {
//        console.log(test);
//   }
// }
//
// evenElements(numbers);


// Create a function that returns an array with only the odd elements from the array.
//
// oddElements([1,2,3,4]) should return [1,3]
// oddElements([2,2,6,4]) should return []

// function oddElements(arr) {
//   var odds = [];
//   arr.forEach(function(element) {
//     if (element % 2 != 0) {
//       odds.push(element);
//     }
//   })
//   if (odds.length<1) {
//     console.log("There are no odd numbers in the array");
//   } else {
//     console.log(odds);
//   }
// }
//
// oddElements(numbers);
