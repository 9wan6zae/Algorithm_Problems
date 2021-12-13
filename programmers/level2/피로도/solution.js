function solution(k, dungeons) {
  let max = 0
  const visited = Array(dungeons.length).fill(false)
  
  const dfs = (cur, cur_k, depth) => {
      visited[cur] = true
      cur_k -= dungeons[cur][1]
      dungeons.forEach((dungeon, i) => {
          !visited[i] && (cur_k >= dungeon[0]) && dfs(i, cur_k, depth+1)
      })
      max = Math.max(depth, max)
      visited[cur] = false
      return max
  }
  
  dungeons.forEach((dungeon, i) => {
      if (k >= dungeon[0]) {
          dfs(i, k, 1)
      }
  })
  
  return max;
}