// function duplicateEncode(word){
//     // ...
// }
 function duplicateEncode(word){
    // ...
  //P: our parameter is a string
  //R: want to return string 
  //E: return a variable whose value is a string of ")" if character repeats  & "(" if character is unique --ex. "Success"  =>  ")())())"
  //P:
  // declare a variable to word lowercase and split
  let letters = word.toLowerCase().split('')
  // declare a variable with an empty string
  let newWord = ''
  

  // loop through letters arr [] in the word to find any duplicate characters or not
  letters.filter((letters,i,arr) => {
    if(arr.indexOf(letters) === i && arr.lastIndexOf(letters) === i){
      newWord += "("
    }else{
      newWord += ")"
    }
  })
    return newWord
}
//key:At any index, if the last index of the current character in the string is not the current index, then there is a duplicate character.

// OR use Set