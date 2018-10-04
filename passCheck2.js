// // function to prompt user to input username and password
//
function getCreds(){
// // get and check user ID
// //if user ID methods meet criteria, break the loop
  do{
    var id = prompt("Enter a User ID");
    var length = checkCharLength(id) == true;
    var char = hasStrangeChar(id,0) == false; // want answer to be false
  }while(!length || !char);

// check password
  do{
    var pass = prompt("Enter a password");
    var same = isSame(id,pass) == false;
    var length = checkCharLength(pass) == true;
    var char = hasStrangeChar(pass,1) == true; //want answer to be true
    var hasNum = hasNumber(pass) == true;
    var actuallyPassword = isActuallyPassword(pass) == false;
  }while(!same || !length || !char || !hasNumber || !actuallyPassword);
}
// //function to test if value is six chars long
function checkCharLength(string){
  if(string.length>=6){
    return true;
  }else{
    alert("User ID & password MUST 6 or more characters");
    return false;
  }
}
//function to test if ID or password contains !#$
function hasStrangeChar(string,key){
  var bool;
  for (var i=0; i < string.length; i++){
    if(string.indexOf("!") !== -1){
      bool = true;
      break;
    }else if(string.indexOf("#") !== -1){
      bool =  true;
      break;
    }else if(string.indexOf("$") !== -1){
      bool = true;
      break;
    }else {
      bool = false;
    }
  }
  if(key == 0){
    alert("User ID can't include !, #, or $.")
    return bool;
  }else{
    alert("Password must include !, #, or $.")
    return bool;
  }
}
//function to check that password has at least one digit
function hasNumber(string){
  for (var i=0; i < string.length; i++){
    for(var j=0; j < 10; j++){
      if(string[i] == j){
        alert("Password must contain a number");
        return false;
      }
    }
  }
  return true;
}

//function check to see if password = user // ID
//we want isSame to be false to continue program
function isSame(id,pass){
  var longer;
  if(id.length > pass.length || id.length < pass.length){
    return false;
  }else{
    for(var i=0; i < id.length; i++){
      if(id[i] != pass[i]){
        return false;
      }
    }
    alert("User ID and password cannot be the same");
    return true;
  }
}
// function to make sure that password isn't "password"
function isActuallyPassword(string){
  var ref = "password";
  var newString = string.toLowerCase();

  if(ref.length > newString.length || ref.length < newString.length){
    return false;
  }else{
    for(var i=0; i<newString.length; i++){
      if(ref[i] != newString[i]){
        return false;
      }
    }
    alert("Password cannot be 'password'");
    return true;
  }
}
//1. User ID can't include !, #, or $
//2. User ID and password cannot be the same
//3. Password must include !, #, or $
//4. Password must contain a number
//5. Password cannot be "password"
//6. User ID & password MUST 6 or more characters
//function that produces alert messages based on intake value




getCreds();
