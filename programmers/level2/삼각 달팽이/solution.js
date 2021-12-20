function solution(n) {
  const answer = Array.from({length: n}, (_, i) => new Array(i + 1).fill(0))
  let count = 1
  let row = -1
  let col = 0
  while (n > 0) {
      for (let i = 0; i < n; i++) answer[++row][col] = count++
      for (let i = 0; i < n - 1; i++) answer[row][++col] = count++
      for (let i = 0; i < n - 2; i++) answer[--row][--col] = count++
      n -= 3
  }
  return [].concat(...answer)
}