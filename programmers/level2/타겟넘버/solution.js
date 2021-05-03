function solution(numbers, target) {
  var answer = 0;
  
  answer = bfs(0, numbers, target);
  
  return answer;
}

function bfs(start_index, numbers, target) {
  let answer = 0;
  const queue = [];
  queue.push([numbers[start_index], -numbers[start_index]]);
  
  let index = start_index + 1;
  
  while(queue.length !== 0) {
      let list = queue.shift();
      if (index !== numbers.length) {
          let newList = [];
          list.forEach((num) => {
              newList.push(num + numbers[index]);
              newList.push(num - numbers[index]);
          })
          queue.push(newList);
          index++;
      } else {
          const target_list = list.filter((num) => num === target)
          answer = target_list.length;
      }
  }
  return answer;
}