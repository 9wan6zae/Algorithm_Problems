function solution(d, budget) {
  var answer = 0;
  
  const sort_d = d.sort((a, b) => {return a-b})

  let index = 0;
  while(budget - sort_d[index] >= 0) {
     answer += 1;
     budget -= sort_d[index++];
  }
  
  return answer--;
}