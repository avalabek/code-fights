var string = "hello";
var splitString = string.split("");
console.log(splitString);
//split turns it into an array
var reverse = splitString.reverse();
console.log(reverse);
var join = reverse.join("");
console.log(join);

//reverse a string no methods

// function reverseString(s){
//   var newString = "";
//   for(let i =s.length -1; i>=0; i--){
//     newString += s[i];
//   }return newString;
// }
// reverseString("hello");

// function reverseString(s){
//   var newString = "";
//   for(let i= s.length-1; i>=0; i--){
//     newString += s[i];
//   }return newString;

// } reverseString("hello");

// function reverseString(s){
//   newString = "";
//   for(let i=s.length-1; i>=0; i--){
//     newString += s[i];
//   }return newString;
// }
// reverseString("hola");
function reverseString(s){
  newString ="";
  for(let i=s.length-1; i>=0; i--){
    newString +=s[i];
  }return newString;
}
reverseString("andreya");

var s= "andreya";
var splitString = s.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
console.log (joinArray);

fibanacci
f(n)=f(n-1)+f(n-2);

function fib(n){
  if (n<= 0){
    return 0;
  }else if (n===1){
    return 1;
  }else {
    return fib(n-1) + fib(n-2);
  }
}
fib(4);