function maxProf(prices){
  let maxProfit =0 
  let minPrice= prices[0]
  
  
  for(let sell =1; sell < prices.length; sell++){
    let sellPrice =prices[sell]
    let profit= sellPrice -minPrice
    
    maxProfit =Math.max(maxProfit, profit)
    
    if (sellPrice <minPrice) min Price =sellprice
  }
  return maxProfit
}
