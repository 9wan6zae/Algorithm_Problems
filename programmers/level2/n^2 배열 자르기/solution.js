function solution(n, left, right) {
  return (Array.from({length: right - left + 1}).map((_, i) => Math.floor(Math.max((left + i) / n, (left+i) % n)) + 1))
}