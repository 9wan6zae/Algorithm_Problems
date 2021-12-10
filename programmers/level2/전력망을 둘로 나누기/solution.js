function solution(n, wires) {
  const adj = [...Array(n+1)].map(() => [...Array(n+1)].map(() => 0))
  const visit = Array(n+1).fill(0)
  let count = 0
  
  wires.forEach(([v1, v2]) => {
      adj[v1][v2] = 1
      adj[v2][v1] = 1
  })
  
  const dfs = (v) => {
      visit[v] = 1
      count++
      
      for (let i = 1; i <= n; i++) {
          adj[v][i] && !visit[i] && dfs(i)
      }
  }
  
  return wires.reduce((m, [v1, v2]) => {
      adj[v1][v2] = 0
      adj[v2][v1] = 0
      dfs(1)
      adj[v1][v2] = 1
      adj[v2][v1] = 1
      m = Math.min(m, Math.abs(n - 2 * count))
      visit.forEach((_, i) => visit[i] = 0)
      count = 0
      return m
  }, n)
}