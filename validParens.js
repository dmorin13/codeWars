//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false




//order matters and find corresponding char

// use Stack (array)  to track opening parens - LIFO - last in first out,  next char must match the last opening paren 


//can check for even number of entries, all pairs must be an even #

var isValid =function(s){
  //set key to opening paran and value to matching closing paran 
  const obj={
  "(":")",
  "{":"}",
  "[":"]"
}
const stack =[]

for(const paran of s){
  //if the string is also in the object, then push the parenthesis string into the array 
  if(obj.hasOwnProperty(paran)){
    stack.push(paran)
  }else{
     const openParan=stack.pop()
     //pop returns the last element in the array 
     //ex: obj[ '(' ] opening paren is acting as a 'key' to the object value, checking for the object for matching closing parenthesis, if it exists in the stack 
     //use 
  if(paran !== obj[openParan]) {
    return false
    }
  }
}
  //return a boolean value to indicate if string is valid or invalid, depending if the stack is empty or not, if all paren's found match 
  //they should have  popped off the stack 
  return stack.length === 0
};
     
  
