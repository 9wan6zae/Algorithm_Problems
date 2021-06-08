function solution(numbers) {
  var answer = [];
  
  const sums = [];
  for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          sums.push(numbers[i] + numbers[j])
      }
  }
  
  const set = new Set(sums);
  answer = [...set].sort((a, b) => {return a-b});
  
  return answer;
}