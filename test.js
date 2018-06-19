it('returns the correct value', function (done) {
  var returnValue = 42;

  aPromise.then(function () {
    setTimeout(function () {
      expect(returnValue).to.equal(42);
      done();
    });
  });
});