function solution(jobs) {
  let index = 0
  let sum_waiting_time = 0
  let time = 0
  const pq = []
  
  // 요청 시간이 빠른 순대로 정렬
  jobs.sort((a, b) => a[0] - b[0])
  
  while(index < jobs.length || pq.length) {
      // 현재 시간 이전에 요청이 들어온 태스크가 있으면 pq에 담고 태스크가 일찍 끝나는 순대로 정렬해라
      if (index < jobs.length && jobs[index][0] <= time) {
          pq.push(jobs[index])
          pq.sort((a, b) => a[1] - b[1])
          index += 1
      }
      
      else {
          if (pq.length) {
              // 시간 갱신
              time += pq[0][1]
              sum_waiting_time += time - pq[0][0]
              pq.shift()
          } else {
              // 현재 time 이전에 추가된 태스크는 없지만 뒤에 남은 job이 있을 때 time을 초기화
              time = jobs[index][0]
          }
      }
  }
  return Math.floor(sum_waiting_time / jobs.length)
}