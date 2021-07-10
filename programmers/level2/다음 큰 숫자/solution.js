function solution(n) {
  var answer = 0;
  
  const one_count = check_one_count(n)
  
  while(true) {
      const next_one_count = check_one_count(n+=1)
      if (one_count === next_one_count) break;
  }
  answer = n
  
  return answer;
}

function check_one_count(n) {
  return n.toString(2).match(/1/g).length
}