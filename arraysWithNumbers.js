// Arrays of Numbers
// Create an array with five decimal numbers, and use it for the following:
//
// Create a function that finds the highest number.
//
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.
// Create a function that finds the lowest number.
//
// lowestNumber([1,4,2]) should return 1
// lowestNumber([-1,-2,-4]) should return -4
// Create a function that finds the smallest number (the closest to zero).
//
// smallestNumber([1,4,2]) should return 1
// smallestNumber([0.1,0.01,0.001]) should return 0.001
// smallestNumber([-1,-2,-4]) should return -1
// smallestNumber([0.1,-0.001]) should return -0.001



var array = [.45, .32, 8.34, .00002, .99];

// function biggest(a){
//   var highest = 0;
//   for(var i=0; i<a.length; i++){
//
//     if(a[i]>highest){
//       highest = a[i];
//     }
//     console.log(a[i]);
//   }
//   console.log(highest);
// }

// function biggest2(arr) {
//   var highest = 0;
//   arr.forEach(function(element) {
//     if (element > highest) {
//       highest = element;
//     }
//     console.log(element);
//   })
//   console.log(highest);
// }
// biggest2(array);
//biggest(array);

// function tiny(arr){
//   var min = arr[0];
//   arr.forEach(function(element){
//     if(element<min){
//       min = element;
//     }
//     console.log(element);
//   })
//   console.log(min);
// }
//
// tiny(array);



// Create a function that calculate the sum.
//
// sum([1,2,3]) should return 6
// sum([]) should return 0


// Create a function that calculate the mean value.
//
// mean([1,2,3]) should return 2
// Create a function that finds the index of the highest number.
//
// indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0

// function sum(arr) {
//   var sum = 0;
//   arr.forEach(function(element) {
//     sum += element;
//   })
//   console.log(sum);
// }
//
// sum([1, 2, 3]);

function mean(arr){
  var sum = 0;

  arr.forEach(function(element){
    sum += element;
  })
  console.log(sum/arr.length);
}

mean([1,2,3,4,0]);
