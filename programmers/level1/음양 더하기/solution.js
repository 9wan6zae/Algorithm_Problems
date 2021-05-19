function solution(absolutes, signs) {
  var answer = 0;
  answer = absolutes.reduce((acc, cur, i) => {
      const sign = signs[i] ? 1 : -1;
      return acc + cur * sign;
  }, 0)
  return answer;
}