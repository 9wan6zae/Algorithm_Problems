function solution(operations) {
  const queue = []
  
  operations.forEach(operation => {
      const [command, value] = operation.split(' ')
      
      if (command === 'I') {
          queue.push(+value)
          queue.sort((a, b) => a - b)
      } else {
          value === '1' ? queue.pop() : queue.shift()
      }
  })
  
  return queue.length ? [queue.pop(), queue.shift()] : [0, 0]
}