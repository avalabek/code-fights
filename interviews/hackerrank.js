// simple sum array
 
function simpleArraySum(ar) {
    var ar=[1, 2,3];
    var total = ar.reduce(function (total, num) {
        return total;
    }, 0);
        }
function Car (make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  // I probably should have put hte method here
  // this.props = function() { return this....}
}
//I didn't put the spaces in as it says concatenate it into a string
Car.props = function (){
  return this.make + this.model + this.year
}
// this is what I wrote because I think theys aid they wanted it in
// an array
const new Car = [
  {make: VW;
  model: GTI;
year: 2014; },
  {
    make: VW;
    model: GTI;
    year: 2014;
  },
  {
    make: VW;
    model: GTI;
    year: 2014;
  },
]


// this is what I should have written
const carOne = new Car ("VW", "GTI", "2014");
const carTwo = new Car ("Honda", "Civic", "2017");
const carThree = new Car ("Ford", "Focus", "2016");

