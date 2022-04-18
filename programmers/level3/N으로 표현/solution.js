function solution(N, number) {
  const dp = Array.from(new Array(9), () => new Set())
  
  if (N === number) return 1
  
  for (let i = 1; i < 9; i += 1) {
      dp[i].add(+(N+"").repeat(i))
      for (let j = 1; j < i; j += 1) {
          for (const arg1 of dp[j]) {
              for (const arg2 of dp[i - j]) {
                  dp[i].add(arg1 + arg2)
                  dp[i].add(arg1 - arg2)
                  dp[i].add(arg1 * arg2)
                  dp[i].add(arg1 / arg2)
              }
          }
      }
      if (dp[i].has(number)) return i
  }
  return -1
}