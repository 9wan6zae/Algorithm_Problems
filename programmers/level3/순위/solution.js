function solution(n, results) {
  const graph = Array.from({length: n}, () => new Array(n).fill(false))
  
  results.forEach(result => {
      let [winner, loser] = result
      
      winner -= 1
      loser -= 1
      
      graph[winner][loser] = 1
      graph[loser][winner] = -1
      graph[winner][winner] = 0
      graph[loser][loser] = 0
  })
  
  for (let mid = 0; mid < n; mid += 1) {
      for (let start = 0; start < n; start += 1) {
          for (let end = 0; end < n; end += 1) {
              if (graph[start][mid] === 1 && graph[mid][end] === 1) graph[start][end] = 1
              if (graph[start][mid] === -1 && graph[mid][end] === -1) graph[start][end] = -1
          }
      }
  }
    
  return graph.filter(v => !v.includes(false)).length
}