function solution(board, moves) {
  var answer = 0;
  
  const basket = []
  
  const end_pos = Array(board.length).fill(board.length)
  
  for (let i = board.length - 1; i >= 0; i--) {
      for (let j = board[i].length - 1; j >= 0; j--) {
          if (board[i][j] !== 0) {
              end_pos[j]--
          }
      }
  }
  
  for (let i = 0; i < moves.length; i++) {
      if (board[end_pos[moves[i]-1]]) {
          const doll = board[end_pos[moves[i]-1]][moves[i]-1]
          const last_doll = basket[basket.length - 1]
          
          if (doll === last_doll) {
              basket.pop()
              answer += 2
          } else {
              basket.push(doll)
          }
          end_pos[moves[i]-1] += 1
      }
  }
  
  return answer;
}