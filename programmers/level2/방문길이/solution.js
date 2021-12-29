function solution(dirs) {
  const pos = {
      x: 0,
      y: 0
  }
  
  return dirs.split('').reduce((acc, cur) => {
      if (pos.y < 5 && cur === 'U') {
          acc.add(`${pos.x}${pos.y}${pos.x}${pos.y + 1}`)
          pos.y++
      }
      if (pos.y > -5 && cur === 'D') {
          acc.add(`${pos.x}${pos.y - 1}${pos.x}${pos.y}`)
          pos.y--
      }
      if (pos.x < 5 && cur === 'R') {
          acc.add(`${pos.x}${pos.y}${pos.x + 1}${pos.y}`)
          pos.x++
      }
      if (pos.x > -5 && cur === 'L') {
          acc.add(`${pos.x - 1}${pos.y}${pos.x}${pos.y}`)
          pos.x--
      }
      return acc
  }, new Set()).size
}