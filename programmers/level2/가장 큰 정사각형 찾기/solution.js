function solution(board) {
  var answer = 0;
  
  const row = board.length
  const column = board[0].length
  
  if (row === 1 && column === 1) {
      answer = board[0][0] ? 1 : 0
  }
  
  for (let r = 1; r < row; r++) {
      for (let c = 1; c < column; c++) {
          if (board[r][c] > 0) {
              board[r][c] = Math.min(board[r-1][c-1], board[r-1][c], board[r][c-1]) + 1
              answer = Math.max(answer, board[r][c])
          }
          
      }
  }

  return answer**2;
}