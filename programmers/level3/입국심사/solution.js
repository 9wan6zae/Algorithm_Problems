function solution(n, times) {
  times.sort((a, b) => a - b)
  let left = 1
  let right = times[times.length - 1] * n
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const count = times.reduce((acc, time) => acc + Math.floor(mid / time), 0)
      
      count < n ? left = mid + 1 : right = mid - 1
  }
  return left
}