// make an array seen of size a.length filled with zeros.When scanning the array and you encounter the number n, check if the corresponding element of seen is still zero(i.e.seen[n] in languages that use a 1 - based index, or seen[n - 1] in languages that use a 0 - based index.).If it the corresponding element is zero, change it to non - zero.If the corresponding element isn't zero, return n as you have encountered a duplicate.

var seen = [0,0,0,0,0,0,1,2,1,2];
 for (let i=0; i<=seen.length; i++){
  if (seen[i]===0) {
   console.log("-1");
  }else console.log(seen[i-1]);
 }
