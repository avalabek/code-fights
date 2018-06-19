function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
 
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    return newString; // "olleh"
}
 
reverseString('hello');

//
var numbs =[1,2,3,4,5,5,6,6]
var newNums =
  (new Set(n));

console.log(newNums);

const newArray=[];

newNums.forEach(function(n){
newArray.push(n)
console.log(newArray); 
});
var a =[2,3,3,4,5,5,6]
function uniqBy(a, key) {

    var seen = new Set();
    return a.filter(item => {
        var k = key(item);
        return seen.has(k) ? false : seen.add(k);
    });
}

function uniq(a){
  const a =[2,3,3,4,5,5,6];
  return Array.from(new Set(a));
}

let uniq = a => [...new Set(a)];