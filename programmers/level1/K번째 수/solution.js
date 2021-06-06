function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++){
    const command = commands[i]
    const start = command[0] - 1
    const end = command[1]
    const index = command[2] - 1
    
    const slicedArray = array.slice(start, end).sort((a, b) => {return a-b  })
    answer.push(slicedArray[index])
  }
  return answer;
}