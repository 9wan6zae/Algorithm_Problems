function solution(a, b) {
  var answer = 0;
  answer = a.reduce((arr, cur, i) => {
      return arr + cur * b[i];
  }, 0)
  return answer;
}