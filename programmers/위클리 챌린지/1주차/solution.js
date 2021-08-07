function solution(price, money, count) {
  var answer = -1;
  answer = Math.max((count * (count + 1) / 2) * price - money, 0);
  return answer;
}