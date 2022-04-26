//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {

  // code away
//  const nameArray = name.toUpperCase().split(' ');
// //   console.log('hello')
//   for( let i = 0; i <= nameArray.length - 1; i++ ){
//    return nameArray"[i]+ '.' +[0]""
//   }
// }

[first, last] =name.toUpperCase().split(' ');
return first[0] + '.' + last[0]
}