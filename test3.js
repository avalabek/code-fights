var expect = require("chai").expect;

var multiply = function (x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x or y is not a number.");
  }
  else return x * y;
};

describe("Multiply", function () {
  it("should multiply properly when passed numbers", function () {
    expect(multiply(2, 4)).to.equal(8);
  });

  it("should throw when not passed numbers", function () {
    expect(function () {
      multiply(2, "4");
    }).to.throw(Error);
  });
});

// var expect = require("chai").expect;
// it('returns 100', function () {
//   var x = 10

//   var y = x * X

//     // fulfill `p2` with value `42`
//     return y
//   });

//   // chain off `p2`
 

//     expect(returnValue).to.equal(100);
 