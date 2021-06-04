function solution(brown, yellow) {
  var answer = [];
  
  let column;
  let row;
  
  for (row = 3; row <= (brown + yellow) / row; row++) {
      column = Math.floor((brown + yellow) / row);
      if ((row - 2) * (column - 2) === yellow) break;
  }
  
  answer = [column, row];
  
  return answer;
}