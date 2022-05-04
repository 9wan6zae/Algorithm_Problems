function solution(s) {
  const check = (str) => {
      const mid = Math.floor(str.length / 2)
      
      for (let i = 0; i < mid; i += 1) {
          if (str[i] !== str[str.length - 1 - i]) return false
      }
      
      return true
  }
  
  for (let i = s.length; i >= 1; i -= 1) {
      for (let j = 0; j <= s.length - i; j += 1) {
          if (check(s.slice(j, i + j))) return i
      }
  }
  return 1
}