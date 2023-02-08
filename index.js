function isPalindrome(word) {
  // Write your algorithm here
    let reversedWord = word.split('').reverse().join('')
    return reversedWord === word
}

/* 
  Add your pseudocode here

  recieve the string 
  split into an array so we can iterate
  reverse word and see what comes back
  check if the reversed word is equal to the passed string
  return true if it is 
  return false if it is not 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
