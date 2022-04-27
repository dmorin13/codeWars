//https://www.codewars.com/kata/5bb904724c47249b10000131 
function points(games) {
  // your code here
  
let pointSum =0
  for (let i =0; i<games.length;i++){
    if(games[i][0]>games[i][2])
    pointSum+=3
    else if(games[i][0]==games[i][2])
    pointSum+=1
    else if(games[i][0]<games[i][2])
    pointSum+=0
    }
return pointSum
}