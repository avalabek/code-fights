function foo(x){
  //do something that takes a while 
  setTimeout("alert('Hello')", 1000);
  
  
  //construct and return a promise
  return new Promise (function(resolve, reject){
    setTimeout("alert('Hello again')", 5000);
    //eventually call resolve() or reject() which are resolution calllbacs for the promise
  });
}

// I think it's only getting here need more functions?
function bar(fooPromise){
  //listen for foo()to complete
  fooPromise.then(
    function(){
      console.log("bar task");
      //foo is done so do bar task
    },
    function(err){
      console.log(error);
      //error here
    }
  )
}
function baz(fooPromise) {
  //listen for foo()to complete
  fooPromise.then(
    function () {
      console.log("baz task");
      //foo is done so do bar task
    },
    function (err) {
      console.log(error);
      //error here
    }
  )
}
var p = foo(42)
bar (p);
baz (p);