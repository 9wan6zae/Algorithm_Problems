function solution(n) {
  const answer = Array.from({length: n}, (_, i) => new Array(i + 1).fill(0))
  let count = 1
  let row = -1
  let col = 0
  for (let i = n; i > 0; i -= 3 ) {
      for (let j = 0; j < i; j++) answer[++row][col] = count++
      for (let j = 0; j < i - 1; j++) answer[row][++col] = count++
      for (let j = 0; j < i - 2; j++) answer[--row][--col] = count++
  }
  return [].concat(...answer)
}