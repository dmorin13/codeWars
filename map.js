
//map creates a new array with the results of calling a function for every array element
let numbers = [2,4,6,8,10]

//function to return the square of a number

function square(number){
  return number* number 
}
//apply square function to each item of the number list 

let square_numbers = numbers.map(square)

console.log(square_numbers)

//output=[4,16,36,64,100]