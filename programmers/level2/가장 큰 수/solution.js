function solution(numbers) {
  var answer = '';
  
  numbers.sort((a, b) => {
      const str_a = a + '';
      const str_b = b + ''
      return (str_b + str_a) - (str_a + str_b);
  });
  answer = numbers[0] === 0 ? '0' : answer = numbers.join('');
  return answer;
}