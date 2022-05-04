function solution(n, k) {
  const answer = []
  let arr = Array.from({length: n}, (_, i) => i + 1)
  let nth = k - 1
  let factorial = arr.reduce((acc, cur) => acc * cur, 1)
  
  while(arr.length) {
      factorial /= arr.length
      
      let value = arr[Math.floor(nth / factorial)]
      answer.push(value)
      nth %= factorial
      arr = arr.filter(v => v != value)
  }
  
  return answer
}