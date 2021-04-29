function solution(priorities, location) {
  var answer = 0;
  
  while(priorities.length > 0) {
      const first = priorities.shift();
      const isNotHighPriority = priorities.some((value, index) => value > first);
      
      if (isNotHighPriority) {
          priorities.push(first);
      } else {
          answer++;
          const isFindPrint = location === 0;
          if (isFindPrint) {
              break;
          }
      }
      location == 0 ? location = priorities.length - 1 : location--;
  }
   
  return answer;
}