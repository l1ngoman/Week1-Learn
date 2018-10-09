
do{
  var sent = false;
  var ans = prompt("Enter an even number")
  if(ans%2==1){
    switch(parseInt(Math.random()*11)){
      case 0:
      case 1:
      case 2: alert("That's not even!!! You're a dick!"); break;
      case 3:
      case 4:
      case 5: alert("It's like you're not even trying to pay attention!"); break;
      case 6:
      case 7:
      case 8: alert("Stop doing that!"); break;
      default: alert("Just... just try that again...");
    }
    sent = true;
  }else {
    alert("You did it (finally!...). You entered: "+ans);
    sent=false;
  }
}while(sent);
