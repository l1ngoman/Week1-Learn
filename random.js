// function makeItem(newName,newPrice){
//   var newItem = {
//     name: newName,
//     price: newPrice,
//     getItemInfo: function(){return `Item: ${this.name}\nPrice: $${this.price}`;}
//   }
//   return newItem;
// }
// var item1 = makeItem("SE Hospital Bed", "1200");
// console.log(item1.getItemInfo());


//make a TV object that has a brand, size, and ON/OFF function
// function makeTV(brand,size){
//     var newTV = {
//         brand: brand,
//         size: size,
//         status: "off",
//         onOff: function(){
//                   if(this.status == "off"){
//                     this.status = "on";
//                   }else{
//                     this.status = "off";
//                   }
//         },
//         printInfo: function(){
//                   console.log(`${this.brand} TV is ${this.status}.`)
//                   }
//     }
//     return newTV;
// }
//
// var newTV = makeTV("Samsung",'64"');
// newTV.printInfo();
// newTV.onOff();
// newTV.printInfo();
// newTV.onOff();
// newTV.printInfo();

//write a function that creates a person
// function makeDude(name,birthday,age){
//   var newDude = {
//     name: name,
//     birthday: birthday,
//     age: age,
//     hasBirthday: function(){age += 1;},
//     printInfo: function(){console.log(`${name} was born on ${birthday} and is ${age} years old.`);}
//   }
//   return newDude;
// }
//
// var dude1 = makeDude("Jack Johnson","7/21/1989",29);
// dude1.printInfo();
// dude1.hasBirthday();
// dude1.printInfo();
// dude1.hasBirthday();
// dude1.printInfo();
// dude1.hasBirthday();
// dude1.printInfo();
//
//**************************SPREAD OPERATORS***********************
// var a, b, c, rest;
// var array = [1,2,3,4,5,6,7];
//
// [a,b,c, ...rest] = array;
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);
//
//****************ARROW FUNCTIONS W/ SPREAD OPERATORS - VERSION ONE*************
// function create_a_sentence(...words) {
//   return words.join("");
// }
//
// console.log(create_a_sentence("hello ", "to ", "world "));
// ==> "Hello to world"
//****************ARROW FUNCTIONS W/ SPREAD OPERATORS - VERSION ONE*************
// var sentenceFactory = (...words) => {return words.join('');}
//
// console.log(sentenceFactory("hello ", "to ", "world "));
