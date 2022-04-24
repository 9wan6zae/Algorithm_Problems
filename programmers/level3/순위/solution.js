function solution(n, results) {
  const graph = Array.from({length: n + 1}, () => new Array(n + 1).fill(false))
  
  results.forEach(([winner, loser]) => {
      graph[winner][loser] = 1
      graph[loser][winner] = -1
      graph[winner][winner] = 0
      graph[loser][loser] = 0
  })
  
  for (let i = 1; i <= n; i += 1) {
      for (let j = 1; j <= n; j += 1) {
          for (let k = 1; k <= n; k += 1) {
              if (graph[j][i] === 1 && graph[i][k] === 1) graph[j][k] = 1
              if (graph[j][i] === -1 && graph[i][k] === -1) graph[j][k] = -1
          }
      }
  }
  let not_check = 0
  
  for (let i = 1; i <= n; i += 1) {
      for (let j = 1; j <= n; j += 1) {
          if (graph[i][j] === false) {
              not_check += 1
              break
          }
      }
  }
  
  return n - not_check
}