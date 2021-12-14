function solution(line) {
  const INF = Number.MAX_SAFE_INTEGER;
  
  var answer = [];
  const cross = []

  let left = INF
  let right = -INF
  let top = -INF
  let bottom = INF
  
  for (let i = 0; i < line.length - 1; i++) {
      for (let j = i + 1; j < line.length; j++) {
          const [A, B, E] = line[i]
          const [C, D, F] = line[j]
          
          const mod = A * D - B * C
          if (mod === 0) continue
          
          const xNumerator = B*F - E*D
          const yNumerator = E*C - A*F

          if (xNumerator % mod || yNumerator % mod) continue
          
          const x = (B*F - E*D) / mod
          const y = (E*C - A*F) / mod
          cross.push([x, y])

          right = Math.max(right, x)
          left = Math.min(left, x)
          top = Math.max(top, y)
          bottom = Math.min(bottom, y)
      }
  }
  
  answer = [...Array(top - bottom + 1)].map(() => [...Array(right - left + 1)].map(() => '.'))
  
  cross.forEach(([x, y]) => {
      answer[top - y][x - left] = '*'
  })
  
  answer = answer.map(a => a.join(''))
  
  return answer;
}