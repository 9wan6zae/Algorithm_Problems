function solution(tickets) {
  const path = []
  const visited = Array(tickets.length).fill(false)

  tickets.sort()

  const dfs = (city, cnt) => {
      path.push(city)
      
      if (cnt === tickets.length) {
          return true
      }
      // 갈 수 있는 노드가 있는지 확인하고 없으면 path에서 제거
      for (let i = 0; i < tickets.length; i += 1) {
          const [src, des] = tickets[i]
          if (!visited[i] && city === src) {
              visited[i] = true
              // 끝까지 못한 티켓은 visited를 false로 다시 변경
              if (dfs(des, cnt + 1)) return true
              visited[i] = false
          }
      }
      path.pop()
      return false
  }

  dfs('ICN', 0)
  
  return path
}