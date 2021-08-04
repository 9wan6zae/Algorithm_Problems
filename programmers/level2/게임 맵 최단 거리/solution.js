function solution(maps) {
  var answer = 0;
  
  // 동, 서, 남, 북
  const dx = [1, -1, 0, 0]
  const dy = [0, 0, 1, -1]
  
  const row = maps.length
  const col = maps[0].length
  
  const queue = [[0, 0]]
  
  const visitCount = Array.from(Array(row), () => Array(col).fill(0))
  visitCount[0][0] = 1
  
  // BFS
  while(queue.length) {
      const [y, x] = queue.shift()
      
      for (let i = 0; i < 4; i++) {
          const [next_y, next_x] = [y + dy[i], x + dx[i]]
          const in_boundary = (0 <= next_y && 0 <= next_x && next_y < row && next_x < col)
          if(in_boundary) {
              const not_visited = maps[next_y][next_x] === 1 && visitCount[next_y][next_x] === 0
              if (not_visited) {
                  visitCount[next_y][next_x] = visitCount[y][x] + 1
                  queue.push([next_y, next_x])
              }
          }
      }
  }
  
  answer = visitCount[row - 1][col - 1] ? visitCount[row - 1][col - 1] : -1
  
  return answer;
}