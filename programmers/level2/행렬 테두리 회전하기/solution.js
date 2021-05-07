function solution(rows, columns, queries) {
  var answer = [];
  
  const num_arr = Array(rows).fill(0).map(() => Array(columns));
  
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
          num_arr[i][j] = i * columns + j + 1;
      }
  }
  
  queries.forEach(query => {
      const [r1, c1, r2, c2] = query.map(pos => pos - 1);
      const queue = [];
      
      for (let i = 0; i < c2 - c1; i++) queue.push(num_arr[r1][c1 + i]);
      for (let i = 0; i < r2 - r1; i++) queue.push(num_arr[r1 + i][c2])
      for (let i = 0; i < c2 - c1; i++) queue.push(num_arr[r2][c2 - i])
      for (let i = 0; i < r2 - r1; i++) queue.push(num_arr[r2 - i][c1])
      
      queue.unshift(queue.pop());
      answer.push(Math.min(...queue));
      
      for (let i = 0; i < c2 - c1; i++) num_arr[r1][c1 + i] = queue.shift();
      for (let i = 0; i < r2 - r1; i++) num_arr[r1 + i][c2] = queue.shift();
      for (let i = 0; i < c2 - c1; i++) num_arr[r2][c2 - i] = queue.shift();
      for (let i = 0; i < r2 - r1; i++) num_arr[r2 - i][c1] = queue.shift();
  })
  
  return answer;
}