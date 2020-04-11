/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/
/*
P- Given a string of text

R- true or false

E- bob wo;; return true

P-
set a if condiction to say if it is true or false
use .split
.reverse
.join
*/


// Intuituve
function palindromeChecker(text ){
  let reverseWord = text.toLowerCase().split('').reverse().join('')
  //.split method on the string that is received passing in an empty string as the only argument in order to spread the characters into an array
  return text === reverseWord
}

// looping through and comparing characters. We use this ways because if it not a palindrome you would know by the half way mark.
// function palindromeChecker(text){
//   let charArray = text.toLowerCase().split('')
//   let result = charArray.every((letter, index) => {
//     /*
//     .every() to loop through the array and perform our check. It tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//     */
//     return letter === charArray[charArray.length - index];
//   })
//   return result
// }

function palindromeChecker(text){
  let word = text.length;
  for (var i = 0; i < word.length/2; i++) { // stop in the middle of the word so that it doesn't continue and return true or false
      if (word[i] !== text[word - 1 - i]){ // keep on moving down one from the
      return false;
    }
  }
  return true;
}


module.exports = palindromeChecker;
