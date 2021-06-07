function solution(n) {
  var answer = 0;

  // 3진법으로 변환
  const ternary_str = n.toString(3);
  // 뒤집기
  const reverse_arr = ternary_str.split('').reverse().join('');
  // 숫자로 변환
  answer = parseInt(reverse_arr, 3);
  
  return answer;
}