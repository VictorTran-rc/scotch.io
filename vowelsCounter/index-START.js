/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
//p
// takes in a string, array of vowels.
// Write a function that'd receive a parameter called text. It would be a string of any length which would be passed to the function as an argument when it is called
// Within the function we have to go through the text and search for occurrences of the English vowels (a,e,i,o,u)

//R
// the number of vowels in the as a interger
// the function would returns the total number of matches(vowels) found. This brings return statements to mind as they simply stop the execution of a function and return a value from that function

//E
// e.g vowelsCounter('anehizxcv') // will return 3


//P
// function vowelsCounter
  // array of vowels, looping through each letter of the string and checking to see if they match the vowels
  // Before running through the text we create a counter initialized to a value of zero.
  // When a match is found, the counter is incremented. At the end of it all, we return the counter which represents the total number of vowels found.
  // use include and reduce method?

//Iterative Approach
  const vowels = ['a','e','i','o','u'] // created an array of vowels

function vowelsCounter(text) { // made use of the for of loop to iterate through each letter of the text
    // Code goes here
    let counter = 0;
    for (let letter of text.lowerCase()) { /* switched each letter into a lowerCase because we don't want to miss the instance of uppercase vowels within the passed text
    Used a for of loop because it creates a loop of iterating over iterable objects.
    Iterable object could be a string, array, map sets etc
    letter is how we are determining the vowels array
    */
      if (vowels.include(letter)){ // we used an if statement to check if the selected letter is included in the array of vowels
        counter++ // if the condition is true increment the counter
      }
    }
// Return number of vowels
    return counter
}

function vowelsCounter(text) {
  //search text with Regex and store all matching instances
  let matchingInstances = text.match(/[aeiou]/gi); // .match It returns an array of the matches found after comparing the regular expression passed in as an argument with the text.
  /* [aeiou] are to determine what you are looking for in the .match
  g is the global search, which means after the first search it will not start over from the beginning but continue searching from the end of the previous match
  i stands for the case sensitive search which makes the whole expression case-sensitive
  */

  //Check if matching instances exist then calculate lenght
  if (matchingInstances) { // evaluates to a truthy value(that is an array of matches found), we return the number of matches found which is also the length of the array.
    //return number of vowelsCounter
    return matchingInstances.length //return the number of matches found which is also the length of the array
  } else {
    return 0
  }
}



module.exports = vowelsCounter;
