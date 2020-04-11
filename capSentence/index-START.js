/* CHALLENGE
Given a sentence containing two or more words,
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'
*/
/*
P- Takes in a string, loop through each word


R- return the string but in capitalised the first letters


E- capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'


P Takes in the string,
  change everything to a lowercase letter
  loop through each word but stop after the first letter
  After the loop you want to capitalised the letter and move on to the next word
  use .toUpperCase() .toLowerCase()
  use .split .map
  using .map and .replace
*/

function capSentence(text){
  let wordsArray = text.toLowerCase().split('') // split used to divide the lowercase sentence into an array of words. Stored in the wordsArray
  let capsArray = []

  wordsArray.forEach((word) => { // iterating through each word to execute a function on it. The function takest he first word and turns it into a uppercase.
    // the remaining part of the word in lowercase we use the slice the string starting from positon 1 till the end
    capsArray.push(word[0].toUpperCase() + word.slice(1)) // splice is used on a string extracts a section of the string and returns it as a new string. It receives two arguments; the beginning index which is compulsory and the end index which is only optional
  });
  return capsArray.join('')
}

//Using .map and .slice
function capSentence(text){
  let wordsArray = text.toLowerCase().split('')
  let capsArray = wordsArray.map(word=>{ // .map function to loop through every word in the array and excute the same function as before to create capsArray, which is an array of the capitalised words.
    return word[0].toUpperCase() + word.slice(1)
  })
   return capsArray.join('')
}


//Using .map and .replace

function capSentence(text){
  let wordsArray = text.toLowerCase().split('')
  let capsArray = wordsArray.map(word =>{

    return word[0].replace(word[0], word[0]).toUpperCase()
    /* .replace is used to create a new string with some or all matches of a pattern replaced by a replacement. The pattern and replacement are passed in as arguments when this methond is called
    We use word[0] twice because we want to select the replace letter and then select it again so we can capitalised it
    */
  })
  return capsArray.join('')
}
module.exports = capSentence
