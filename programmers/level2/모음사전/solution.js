function solution(word) {    
  return word.split('').reduce((acc, cur, i) => acc + (5**(5-i) - 1) / (5 - 1) * 'AEIOU'.indexOf(cur) + 1 , 0)
}