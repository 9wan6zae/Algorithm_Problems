function solution(strs, t) {
  const dp = Array(t.length + 1).fill(Infinity)
  dp[0] = 0
  const strsSet = new Set(strs)
  
  for (let i = 1; i < t.length + 1; i += 1) {
      for (let j = 1; j < Math.min(i + 1, 6); j += 1) {
          const start = i - j
          const end = i
          
          if (strsSet.has(t.slice(start, end))) {
              dp[i] = Math.min(dp[i], dp[start] + 1)
          }
      }
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1]
}