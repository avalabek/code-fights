var expect = require("chai").expect;

// var multiply = function (x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new Error("x or y is not a number.");
//   }
//   else return x * y;
// };
// STEP 1: write out a string of what should happen
// ie: it should return a promise that equals 42
//but I think in this case, I am not actually writing a test, but writing hte function.
describe("fortyTwo", function () {
  it("should equal 42", function () {
    expect(fortyTwo(//test params)) 
    .to.equal(42);
  });
//can we test if something can return a promise?
  it("return a promise", function () {
    expect(function () {
      multiply(2, "4");
    }).to.throw(Error);
  });
});
