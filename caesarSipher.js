var msg = "helloxyz";
var key =30;
var alphabet = ['a','b','c','e','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var upperAlphabet = lowerAlphabet.map(function(element){
//                         return element.toUpperCase();
//                         })
// var alphabet = lowerAlphabet.concat(upperAlphabet);
// array length-1 - index y will be what we need to subtract from the key to start array at 0
// newIndex = key + orgIndex ; if greater than original arraylength, then newIndex - arraylength = newIndex
function encode(key, message){
  var cipher = '';
  if(key>alphabet.length){
    key -= alphabet.length;
  }

  for(var i=0; i<message.length; i++){
    var orgIndex = alphabet.indexOf(message[i]);
    var newIndex = orgIndex + key;
    if(newIndex>alphabet.length-1){
      newIndex -= alphabet.length;
    }
    cipher += alphabet[newIndex];
  }
  return cipher
}

console.log(encode(key,msg));
