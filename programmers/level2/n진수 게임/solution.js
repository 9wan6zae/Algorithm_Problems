function solution(n, t, m, p) {
  var answer = '';
  
  const numbers = []
  
  let number = 0
  
  while ( numbers.length < t * m ) {
      (number.toString(n).split('')).map(v => numbers.push(v.toUpperCase()))
      number += 1
  }
  
  answer = numbers.filter((v, i) => i % m === (p - 1)).join('').substring(0, t)
  
  return answer;
}