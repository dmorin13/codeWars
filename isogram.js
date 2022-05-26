// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.

//control for casing, to lowercase 
//.size, counts the # of elements in the set, we will set it equal to the length of the original string 
//  if those strings are qual it will return true, it is an isogram b/c no char were removed making the new Set

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str){
  return new Set(str.toLowerCase()).size === str.length 
}
