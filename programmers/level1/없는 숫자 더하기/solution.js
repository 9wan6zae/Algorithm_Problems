function solution(numbers) {
  var answer = -1;
  
  const sum = numbers.reduce((c, a) => a + c, 0)
  
  answer = 45 - sum
  
  return answer;
}