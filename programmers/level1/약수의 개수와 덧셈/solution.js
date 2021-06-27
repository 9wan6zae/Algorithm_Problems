function solution(left, right) {
  var answer = 0;
  
  for (let i = left; i <= right; i++) {
      answer += Number.isInteger(Math.sqrt(i)) ? (-1) * i : i
  }
  
  return answer;
}