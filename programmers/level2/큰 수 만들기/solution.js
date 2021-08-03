function solution(number, k) {
  const stack = []
  
  for (let i = 0; i < number.length; i++) {
      const pivot = number[i]
      
      while (k > 0 && stack[stack.length - 1] < pivot) {
          stack.pop()
          k--
      }
      stack.push(pivot)
  }
  stack.splice(stack.length - k, k)
  
  return stack.join('');
}