function solution(n) {
  const result = []
  const hanoi = (n, start, to, via) => {
      if (n === 1) {
          result.push([start, to])
      } else {
          hanoi(n-1, start, via, to)
          result.push([start, to])
          hanoi(n-1, via, to, start)
      }
  }
  
  hanoi(n, 1, 3, 2)
  
  return result
}