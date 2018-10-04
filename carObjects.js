function makeCar(newMake, newModel, newYear, newColor){
  var newCar = {make: newMake,
                model: newModel,
                year:newYear,
                color: newColor,
                speed: 0,
                maxSpeed: 85,
                getSpeed: function(){return this.speed;},
                accelerate: function(){
                              var increment = 1;
                              if(this.speed <= this.maxSpeed - increment)
                              {
                                this.speed += increment;
                              } else {
                                console.log("Car exploded!");
                              }
                            },
                brake: function(){
                        if(this.speed > 0)
                        {
                          this.speed -= 1;
                        } else {
                          this.speed = 0;
                        }
                      }
              };

  return newCar;

}

var car1 = makeCar("Kia", "Sol", 2018, "black");

while(car1.getSpeed() < 90){
  car1.accelerate();
  console.log(car1.getSpeed());
}

while(car1.getSpeed() > 0){
  car1.brake();
  console.log(car1.getSpeed());
}
