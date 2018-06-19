// this code passes no matter what value is put in as v or if I change the return value expected.
//even if I change 21 to a string that cannot possibly return 42 the number, still it passes
// the test. so something wrong with the test.

var expect = require("chai").expect;

it('returns the correct value', function () {
  var p = Promise.resolve("andreya");

  var p2 = p.then(function (v) {
     console.log(v);	// 21

    // fulfill `p2` with value `42`
    return v * 2;
    
  });

  // chain off `p2`
  p2.then(function (v) {
    return (v);	// 42
    console.log(v);
  
    expect(returnValue).to.equal(42);
  })
}) 