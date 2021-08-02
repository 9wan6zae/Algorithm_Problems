function solution(N, road, K) {
  var answer = 0;

  const distance = Array(N+1).fill(Infinity)
  const adj = Array.from({length: N + 1},  () => [])
  
  road.forEach(([start, to, time]) => {
      adj[start].push({to, time})
      adj[to].push({to: start, time})
  })
  
  const pq = [{to: 1, time: 0}]
  distance[1] = 0
  
  while(pq.length) {
      let {to, time} = pq.pop()
      
      adj[to].forEach(next => {
          if (distance[next.to] > distance[to] + next.time) {
              distance[next.to] = distance[to] + next.time
              pq.push(next)
          }
      })
  }
  
  return distance.filter(val => val <= K).length
}