function solution(n,a,b) {
  var answer = 0;
  
  let min_num = Math.min(a,b);
  let max_num = Math.max(a, b);

  for (let i = 0; i < n/2; i++) {
      answer += 1;
      const is_continous = min_num + 1 === max_num;
      const is_odd_end = max_num % 2 === 0
      if (is_continous && is_odd_end){
          break;
      } else {
          min_num = Math.ceil(min_num/2);
          max_num = Math.ceil(max_num/2);
      }
  }
  return answer;
}