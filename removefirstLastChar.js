
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  //You got this!
  return str.slice(1, -1)
 };
 
// slice method 
// start index - the index (zero-based) at which we start extraction
// end index - extract characters up to, but not including this index. A negative index of -1 means go up to, but not including the last character of the string