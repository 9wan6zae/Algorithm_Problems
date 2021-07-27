function solution(numbers) {
  var answer = [];
  
  for (let i = 0; i < numbers.length; i++) {
      const number = '0' + numbers[i].toString(2)      
      const lastIndex = number.lastIndexOf('0')
      
      if (lastIndex === number.length - 1) {
          answer.push(numbers[i] + 1)
      } else {
          const prefix = number.slice(0, lastIndex)
          const postfix = number.slice(lastIndex + 2)
          
          answer.push(parseInt(prefix + "10" + postfix, 2))
      }
  }
  
  return answer;
}