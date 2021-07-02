function solution(N, stages) {
  var answer = [];
  const rank = Array(N)
  
  let acc = 0
  
  for (let i = 1; i <= N; i++) {
      const nums = stages.filter(v => v === i).length
      rank[i-1] = {stage: i, fail_rate: 0}
      if ((stages.length - acc) > 0)
          rank[i-1].fail_rate = nums / (stages.length - acc)
      acc += nums
  }
  
  rank.sort((a, b) => {
      return b.fail_rate - a.fail_rate
  })
  answer = rank.map(v => v.stage)
  
  return answer;
}