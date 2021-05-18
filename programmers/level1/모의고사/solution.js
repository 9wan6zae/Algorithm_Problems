function solution(answers) {
  var answer = [];
  const method = [];
  method.push([1, 2, 3, 4, 5]);
  method.push([2, 1, 2, 3, 2, 4, 2, 5]);
  method.push([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
  
  const score = [0, 0, 0];
  
  for (let i in method) {
      score[i] = answers.filter((v, j) => v === method[i][j % method[i].length]).length;
  }
  
  const max = Math.max(...score);
  
  score.forEach((v, i) => {
      if (v === max) {
          answer.push(+i+1);
      }
  })
  
  return answer;
}