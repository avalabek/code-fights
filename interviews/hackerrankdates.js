
// Sunday - Saturday : 0 - 6

// console.log(day1);
// expected output: 2
function day(day1) {
  var birthday = new Date("August 19, 1975 23:15:30");
  var day1 = birthday.getDay();
  if (day1===0){
    return "Sunday";
  }else if (day1 ===1){
    return "Monday";

  }else{
    return "Tuesday"
  }
};

// the below works; not sure why if wouldn't work other than its long
var dateString = "August 19, 1975 23:15:30";
function getDayName(dateString) {
  const day = new Date(dateString);
  const weekday = day.getDay();
 
}
 console.log(weekday);
//   const weekDays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];
//   return weekDays[day.getDay()];
// }














const dateString = "06/08/2018";
console.log(dateString);
// console.log(dateString.getDay());
//  ///below for hackerrank
// function getDayName(dateString) {
//     let dayName;
//     const date1 = new Date(dateString);
//     const day1 = date1.getDay();
//     const name = (day1 =>{ 
//         if (day1===0) return "Sunday"
//     }else if (day1===2) return "Monday"
//        }else if (day1===2) return "Monday"                    
//                            })
    
//     return dayName;
// }

