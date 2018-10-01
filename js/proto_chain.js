function Vehical() {
    this.speed = 0;
}
function Bike() {
    Vehical.apply(this, arguments);
    this.wheelsCount = 2;
}
Vehical.prototype.move = function(speed) {
    this.speed++;
    console.log(this.speed);
};
Vehical.prototype.stop = function() {
    this.speed = 0;
    console.log("You had just stopped");
};
Bike.prototype = Object.create(Vehical.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.move = function(speed) {
    this.speed++;
    console.log("vroom vroom! Watch out, you're going faster! speed =" + this.speed);
};
function Car() {
    Vehical.apply(this, arguments);
    this.wheelsCount = 0;
    this.doorsCount = 4;
    this.openDoor = 0;
    this.closeDoor = 0;
}
Car.prototype.openDoor = function(openDoor) {
    if (openDoor < 4)
        this.openDoor += openDoor;
        console.log("You have " + this.openDoor + " opened doors")
};
Car.prototype.closeDoor = function(closeDoor) {
    if(closeDoor > 0)
        this.closeDoor -= closeDoor;
        console.log("You have " + this.closeDoor + " closed doors")
};
function MonsterTruck() {
    Vehical.apply(this, arguments);
    Car.apply(this, arguments);
    this.wheelsSize = 1;
}
MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;

MonsterTruck.prototype.openDoor = function() {
    setTimeout(Car.prototype.openDoor(this, arguments), 1000);
};
monsterTruck = new MonsterTruck();
monsterTruck.openDoor();
const bike = new Bike();
bike.move();
console.log(bike.speed);
const car = new Car();
car.openDoor(1);
car.closeDoor(1);