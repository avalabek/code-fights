function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function() {
  return this.model + " has done " + this.miles + " miles";
};

// Usage:

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());
/////////////////////////////////////////////////////////////////////////
function Car (make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.toString = function(){
  console.log (this.make + " " + this.model + " " + this.year);
};

var carOne = new Car ("VW", "GTI", "2014");

console.log (carOne.toString());