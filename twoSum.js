// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
P:[num,num, num], integer='target'
R:numerical value which represents the indices of the numbers which add up  the value of 'target' interger, 2 integers 
E:target = 9

evaluate the numerical value of the integer at index 0 and check whether it's neighbor can be added to the current number and yield the sum equivalent to 'target'*/


var twoSum =function(nums, target){
  const indexMap={}
  for(let i=0; i< nums.length; i++){
    console.log(i, nums[i])
    let complement =target-nums[i]
    if(indexMap[complement] !== undefined){
      return [indexMap[complement], i]]
    }
   indexMap[nums[i]]=1
  } 
}

//using Map()

var twoSum =function(nums, target) {
  let map =new Map()
  for(let i=0;i <nums.length; i++){ 
      let num1 =nums[i]
      let num2 =target-num1
      if(map.has(num2)){
        return [i, map.get(num2)]
      }
   }
}
      
