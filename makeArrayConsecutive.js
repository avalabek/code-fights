// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non - negative integer size.Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.Help him figure out the minimum number of additional statues needed.

//   Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.



//the below will just keep adding 1 to each number in the array forever and ever
//remember you are trying to get the number so maybe push into an empty array 
  
function makeArrayConsecutive2(statues) {
  const statues = [6, 2, 3, 8];
  statues.sort();
  newStatues = [];
  console.log("sorted", statues);
  //2,3,6,8
  count = "";
  for (let i=0; i<statues.length -1; i++){
    const diff = statues[i+1] - statues[1];
    if ( diff >=2) {
      statues.push(statues[i] + 1);
      newStatus.push(statues[i] + 1);
      statues.sort();
    } else {
      console.log("consecutive")
    } //note you kiwill have to sort again at the end, unless you can push to an exact position?  }
    console.log("pushed", statues);
  }
  return newStatues.length;
}
//it is returning 12. hmm...
//so now the new array is [3, 4, 7, 9] why is it pushing 3? Also we don't need the last one.
  makeArrayConsecutive2();
    //also note you are modifying the original array

  //sort the array in order first
  //then see what numbers are missing 
  //or just add one to each number if the difference between
  //the number after it is > 1 so you want the difference between each
  //number to be ===1

