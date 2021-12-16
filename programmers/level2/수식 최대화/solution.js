function solution(expression) {
  const priority = [
      ['-', '*', '+'],
      ['-', '+', '*'],
      ['*', '-', '+'],
      ['*', '+', '-'],
      ['+', '-', '*'],
      ['+', '*', '-'],
  ]
  let max = 0
  
  for(let ops of priority) {
      const split = expression.split(/(\D)/)
      for (let op of ops) {
          while(split.includes(op)) {
              const idx = split.indexOf(op)
              split.splice(idx - 1 , 3, eval(split.slice(idx - 1, idx + 2).join('')))
          }
      }
      max = Math.max(max, Math.abs(split[0]))
  }
  
  return max;
}