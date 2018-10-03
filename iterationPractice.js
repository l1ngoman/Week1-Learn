// Javascript Iteration Challenges
// For to While
// Re-write the following as a while loop:
//
// for (var i=0; i<10; i++) { console.log(i); }
// What is the value of i after the loop? Is it the same in both cases?
//
// var i =0;
//
// while(i<10){
//   console.log(i);
//   i++;
// }

// .. and Back
// Re-write the following as a for loop:
//
// var a = 10;
// while (a > 0) {
//   console.log(a);
//   a = a - 1;
// }
// Is the value of a the same after the loop?
//
// for(var a = 10; a > 0; a--) {
//   console.log(a);
// }

// **********************Duplicate Array
// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.
//
// mergeArray([1, 2, 3], [2, 30, 1]) should return [1, 2, 3, 30]
//
// Order does not matter.

//
// function mergeArray(arr1,arr2){
//   var together = arr1.concat(arr2);
//   var newArray = [];
//
//   for(var i=0; i<together.length; i++){
//       if(!newArray.includes(together[i])){
//         newArray.push(together[i]);
//       }
//   }
//   console.log(newArray);
// }
//
// mergeArray([1, 2, 3], [2, 30, 1]);


// function mergeArray(arr1,arr2){
//   for(var i=0; i<arr1.length; i++){
//     for(var j=0; j<arr2.length; j++){
//       if(arr1[i]==arr2[j]){
//         arr2.splice(j,1);
//       }
//     }
//     var newArray = arr1.concat(arr2);
//   }
//   console.log(newArray);
// }
//
// mergeArray([1,2,3],[2,3,4,5]);

//
// Pre-fill
// Write a Javascript function called fillArray to create a specified number of elements with a pre-filled numeric values in an array.
//
// fillArray(6, 0) should return [0, 0, 0, 0, 0, 0]
// fillArray(4, 11) should return [11, 11, 11, 11]
//
// function fillArray(length, value){
//   var newArray = [];
//   var count = 0
//   while(length>count){
//     newArray.push(value);
//     count++;
//   }
//   console.log(newArray);
// }
//
// fillArray(5,16);

// *****************Clean Function
// Write a Javascript function to filter false, null, 0 and blank values from an array.
//
// filterArrayValues([58, '', 'abcd', true, null, false, 0]) should return [58, "abcd", true]
//

var arr = [58, '', false, 'abcd', true, null, 0, 66, false, null, 0];
var newArray = [];
function filter(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] != false && array[i] != null && array[i] != undefined) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

filter(arr);

// Sum Target
// Write a Javascript function to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.
//
// findPair(50, [10,20,10,40,50,60,70] should return [0, 3] or [2, 3] (one or the other or both)
// findPair(50, [25,25,10] should return [0, 1] or [1, 0] (but not both)
//
// Order does not matter.

// function sumTarget (num, arr) {
//   for (var i = 0; i < arr.length; i++) {
//     // if num = sum of two arr oddElements
//     var remainder = num - arr[i];
//     if (arr.includes(remainder)) {
//       console.log(`[${i}, ${arr.indexOf(remainder)}]`);
//     }
//   }
// }
// sumTarget(10, [6, 5, 3, 4, 5]);
