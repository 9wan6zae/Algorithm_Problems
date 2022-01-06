function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => [])
  
  edge.forEach(([src, des]) => {
      graph[src].push(des)
      graph[des].push(src)
  })
  
  const distance = Array(n + 1).fill(0)
  distance[1] = 1
  
  const queue = [1]
  while(queue.length) {
      const src = queue.shift()
      graph[src].forEach(des => {
          if (distance[des] === 0) {
              queue.push(des)
              distance[des] = distance[src] + 1
          }  
      })
  }
  
  const max = Math.max(...distance)
  return distance.filter(v => v === max).length
}