function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)]
  
  for (const price of money) {
      for (let i = 0; i <= n; i += 1) {
          if (i >= price) {
              dp[i] += (dp[i - price] % 1000000007)
          }
      }
  }
  return dp[n]
}