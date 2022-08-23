var intersection =function(nums1, nums2){

  let intNum= nums1.filter( x=> nums2.indexOf(x) !== -1)


  let arrInt=Array.from(intNum)
  console.log(arrInt) 
  const uniqueIntNums= [..new Set(arrInt)]
  
    return uniqueIntNums
}
  
  
