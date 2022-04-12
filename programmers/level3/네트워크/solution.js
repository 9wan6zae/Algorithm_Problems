function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false)
  
  const dfs = (node) => {
      visited[node] = true
      
      for (let i = 0; i <= n; i += 1) {
          computers[node][i] && !visited[i] && dfs(i)
      }
  }
  
  for (let i = 0; i < n; i += 1) {
      if (!visited[i]) {
          dfs(i)
          answer += 1
      }
  }
  
  return answer;
}