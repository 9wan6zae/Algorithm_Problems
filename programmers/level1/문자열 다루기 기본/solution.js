function solution(s) {
  var answer = true;
  answer = (/^\d{4}$|^\d{6}$/g).test(s)
  return answer;
}