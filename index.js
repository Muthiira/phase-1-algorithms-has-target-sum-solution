function hasTargetSum(array, target){
  //create an object to keep track of any numbers that weve seen
  const numbers = {}
  //iterate through every number of the array 
  for (let i = 0; i < array.length; i++){
    let rem = target - array[i];
    //check if any key is the rem
    if (rem in numbers) return true;
    //otherwise addd that number to our object
    numbers[array[i]] = true;
  }
  return false; 
}
// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   //iterate through the array
//   for (let i = 0; i = array.length; i++) {
//     //identify a rem that adds to the current array to equal the target
//     let rem = target - array[i];
//     //iterate through the rest of the array
//     for (let j = i + 1; j < array.length; j++) {
//       //check if any number is our rem
//       if (array[j] === rem) return true;
//     }
//   }
//   return false;
// }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate each number in the array
  for the current_number identify a boost that adds to the target(boost = target - current_number)
  iterate through the rest of the array and check if any number == boost
  if so return true
  if I reach end of array and found no number return false

   
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
