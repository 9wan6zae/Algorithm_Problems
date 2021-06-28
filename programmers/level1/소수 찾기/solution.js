function solution(n) {
  var answer = find_num_of_prime(n)
  return answer;
}

function find_num_of_prime(n) {
  const numbers = Array(n).fill(true)
  
  numbers[0] = false
  
  for (let i = 2; i ** 2 <= n; i++) {
      const is_prime = numbers[i - 1]
      if (is_prime) {
          for (let j = i ** 2; j <= n; j += i) {
              numbers[j - 1] = false
          }
      }
  }
  
  return numbers.filter(v => v).length
}