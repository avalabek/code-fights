// function splitString(year) {

//   var yearArray = year.split("");
//   console.log(yearArray);
// }
// splitString("1900");


// function sliceYear(year){
//   var year = "1904";
//   var century = year.slice(0,2)
//   console.log(century);
// }
// // sliceYear();
// This is nested if statements and doesn't work so maybe a switch statement also, i need to treat the input as an integer not a string.
// function sliceYear(year) {
//   var year;
  
//   if (year.length===4){
//     if (year[2] && year[3] === 0) {
//       var century = year.slice(0, 2)
//       var centuryNum = parseInt(century);
//       console.log(centuryNum);
//     } else {
//    console.log(centuryNum + 1);
//   //now need to write a case where the year is 100 or only three so if the length of the string is less than 4
//   }
// }
//   else if (year.length===3){
//     if (year[1] && year[2]===0){
//       var hundreds = year.slice(0,1);
//       var hundredsNum = parseInt(hundreds);
//     console.log(hundredsNum);
//   } else{
//     console.log(hundredsNum +1);
//   }
// }
// }
// sliceYear("1900");
// sliceYear("100");
// sliceYear("1904");

//ok now thinking this is not going to work because it is string not array so how to find index
//now need to deal with the cases of the 00's so like 1900 1700 if the last two digits are 00, then don't add the 1
function sliceYear(year) {
  var year;
  var yearString= year.toString();
  console.log (yearString)

  if (year.length === 4) {
    if (year[2] && year[3] === 0) {
      var century = year.slice(0, 2)
      var centuryNum = parseInt(century);
      console.log(centuryNum);
    } else {
      console.log(centuryNum + 1);
      //now need to write a case where the year is 100 or only three so if the length of the string is less than 4
    }
  }
  else if (year.length === 3) {
    if (year[1] && year[2] === 0) {
      var hundreds = year.slice(0, 1);
      var hundredsNum = parseInt(hundreds);
      console.log(hundredsNum);
    } else {
      console.log(hundredsNum + 1);
    }
  }
}
sliceYear("1900");
sliceYear("100");
sliceYear("1904");

