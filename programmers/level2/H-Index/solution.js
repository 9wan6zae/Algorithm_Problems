function solution(citations) {
  var answer = 0;
  
  citations.sort((a, b) => {return b - a})
  for (answer = 0; answer < citations.length; answer++) {
      if (citations[answer] <= answer) break;
  }
  
  return answer;
}