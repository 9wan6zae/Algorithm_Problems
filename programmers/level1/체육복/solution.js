function solution(n, lost, reserve) {
  var answer = 0;
  
  const diff_reserve = reserve.filter(x => !lost.includes(x));
  const diff_lost = lost.filter(x => !reserve.includes(x));
  
  for (let i in diff_reserve) {
      for (let j in diff_lost) {
          const a_reserve = diff_reserve[i];
          const a_lost = diff_lost[j];
          
          if (a_reserve + 1 === a_lost || a_reserve - 1 === a_lost) {
              diff_lost.splice(j, 1);
              break;
          }
      }
  }
  
  answer = n - diff_lost.length;
  
  return answer;
}