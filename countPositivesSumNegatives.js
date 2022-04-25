//https://www.codewars.com/kata/576bb71bbbcf0951d5000044 

function countPositivesSumNegatives(input) {  
  if (input === null) return []
  if (input.length < 1 || input === 0) {
    return []
  }
  console.log(input)
  
  const array = [0, 0]
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      array[0] += 1
    } else {
      array[1] += input[i]
    }
  } return array
}