// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
//l -[1,2,'a','b']
// filter_list([1,2,'a','b']) == [1,2]

function filter_list(l){
  return l.filter(int => typeof int == 'number')
}


// function filter_list(l){
//   var res =[]
//   for(var item =0; item < l.length;item++){
//     if(typeof l[item]=== "number"){
//       res.push(l[item])
//     }
//   }
//   return res
// }