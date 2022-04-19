function solution(routes) {
  let answer = 0;
  
  routes.sort((a, b) => a[1] - b[1])
  
  let camera = -30001
  
  routes.forEach(([in_pos, out_pos]) => {
      if (camera < in_pos) {
          answer += 1
          camera = out_pos
      }
  })
  
  return answer;
}