//Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr (n, s) { 
  let newString = ''
      for(let i = 0; i < n; i++) {
          newString += s
      }
      return newString
  }

  //looping through the string and using the addition assignment operator ( += ) to add the value of the right operand and assigns the result to the newString variable