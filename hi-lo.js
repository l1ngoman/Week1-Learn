// Javascript Hi/Lo Game
// Goal
// Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// If the user's guess is too high or too low, the computer notifies them of that
// Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
// Hint: See Math.random()
// //
//
// var userNum = 0;
// var win = false;
//
// function hiLo() {
//     var secretNum = parseInt((Math.random() * 100) + 1);
//     console.log(secretNum);
//     while (!win) {
//       // get user input, test user input aginst secretNum
//       // prompt() does not run within terminal, copy/paste to chrome to test
//       userNum = prompt("What number between 1-100?");
//       if (userNum == secretNum) {
//         console.log('You win!');
//         win = true;
//       } else if (userNum < secretNum) {
//         console.log('Low, guess again');
//       } else {
//         console.log('High, guess again');
//       }
//     }
// }
//
// hiLo();

// Stretch goal 1
// If the user has not guessed the secret number in seven tries, the user loses.
//
// var userNum = 0;
//
//
// function hiLo() {
//     var secretNum = parseInt((Math.random() * 100) + 1);
//     console.log(secretNum);
//     for(var i=7;i>0;i--){
//       // get user input, test user input aginst secretNum
//       // prompt() does not run within terminal, copy/paste to chrome to test
//       userNum = prompt("What number between 1-100?");
//       if (userNum == secretNum) {
//         console.log('You win!');
//       } else if (userNum < secretNum) {
//         console.log('Low, guess again');
//       } else {
//         console.log('High, guess again');
//       }
//       if(i==1){
//         console.log("You didn't guess in 7 tries!!!")
//       }
//       console.log("Attempt: "+i);
//     }
//
// }
//
// hiLo();

// Stretch goal 2
// Validate the user's input. If the user puts a anything other than a number, tell the user they can only use numbers.
// Hint: To create a number from a string in javascript use parseInt( ). See: Description.
//
// var userNum = parseInt(0);
// var valid = false;
//
//
// function hiLo() {
//     var secretNum = parseInt((Math.random() * 100) + 1);
//     console.log(secretNum);
//     for(var i=7;i>0;i--){
//       // get user input, test user input aginst secretNum
//       // prompt() does not run within terminal, copy/paste to chrome to test
//       do{
//         userNum = parseInt(prompt("What number between 1-100?"));
//         if(userNum<1 || userNum>100 || isNaN(userNum)){
//           console.log("That's not a valid answer. Try again.")
//           valid = true;
//         }else{
//           valid = false;
//         }
//       }while (valid);
//
//       if (userNum == secretNum) {
//         console.log('You win in '+(8-i)+" attempt(s)!");
//         break;
//       } else if (userNum < secretNum) {
//         console.log('Low, guess again');
//       } else {
//         console.log('High, guess again');
//       }
//       if(i==1){
//         console.log("You didn't guess in 7 tries!!!")
//       }
//       console.log("Attempt: "+i);
//     }
// }
//
// hiLo();


// Stretch goal 3
// Allow the user to put their name in before the game starts. When the user has won the game, let the user know they have won, using their name.

var userNum = parseInt(0);
var valid = false;


function hiLo() {
    var secretNum = parseInt((Math.random() * 100) + 1);
    console.log(secretNum);
    var userName = prompt("What's your name, sailor?");
    for(var i=7;i>0;i--){
      // get user input, test user input aginst secretNum
      // prompt() does not run within terminal, copy/paste to chrome to test
      do{
        userNum = parseInt(prompt("What number between 1-100?"));
        if(userNum<1 || userNum>100 || isNaN(userNum)){
          console.log("That's not a valid answer. Try again.")
          valid = true;
        }else{
          valid = false;
        }
      }while (valid);

      if (userNum == secretNum) {
        console.log('You win in '+(8-i)+" attempt(s), "+userName+"!");
        break;
      } else if (userNum < secretNum) {
        console.log(`Low, guess again, ${userName}`);
      } else {
        console.log(`High, guess again, ${userName}`);
      }
      if(i==1){
        console.log(`You didn't guess in 7 tries, ${userName}!!!`)
      }
      console.log("Attempt: "+i);
    }
}

hiLo();
