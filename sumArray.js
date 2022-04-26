//https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  console.log(array)
  
  if ( array===null||array===undefined|| !array.length|| array.length <= 2) 
  return 0;
  
  function compareNumbers(a, b) {
    return a - b  
  }
  
  array.sort(compareNumbers);
  
  console.log(array)
  
  let slicedArray =array.slice(1, array.length-1);
  
  console.log(slicedArray)
  

  let sum =0 
  for (i=0; i < slicedArray.length; i++){
    console.log('i;',i)
    sum += slicedArray[i]
  }
  return sum
  
  console.log('sum',sum)
}
  