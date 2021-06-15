function solution(s) {
  var answer = '';
  
  const mid = parseInt(s.length / 2)
  
  answer = s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid]

  return answer;
}