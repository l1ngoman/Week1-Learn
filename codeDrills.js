//************CODE DRILLS **********************

var numArr = [3,5,16,18,9,11,26];

function outputOdds(arr){
var newArr = [];

  for(var i = 0; i<arr.length; i++){
    if(arr[i]%2 != 0){
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

outputOdds(numArr);
