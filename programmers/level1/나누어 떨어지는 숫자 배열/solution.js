function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((val) => val % divisor === 0)
  answer = answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
  return answer;
}