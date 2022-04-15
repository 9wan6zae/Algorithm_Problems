function solution(n) {
  const check = (board, row) => {
      for (let i = 0; i < row; i += 1) {
          if (board[i] === board[row] || Math.abs(i - row) === Math.abs(board[i] - board[row]))
              return false
      }
      return true
  }
  
  const dfs = (board, row) => {
      let count = 0
      
      if (row === n) {
          return 1
      }
      
      for (let col = 0; col < n; col += 1) {
          board[row] = col
          
          if (check(board, row)) {
              count += dfs(board, row + 1)
          }
      }
      return count
  }
  
  return dfs(Array(n).fill(-1), 0)
}