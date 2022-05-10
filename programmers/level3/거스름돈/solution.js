function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)]
  
  for (const price of money) {
      for (let j = 0; j <= n; j += 1) {
          if (j >= price) {
              dp[j] += (dp[j - price] % 1000000007)
          }
      }
  }
  return dp[n]
}