function solution(n, works) {
  works.sort((a, b) => b - a)
  let max = works[0]
  
  while (n) {
      for (let i = 0; i < works.length; i += 1) {
          if (max === works[i]) {
              works[i] -= works[i] ? 1 : 0
              n--
          }
          if (!n) break
      }
      
      max--
      if (!max) break
  }
  
  return works.reduce((acc, cur) => acc += cur ** 2, 0)
}