function solution(scores) {
  var answer = '';
  const score = Array.from(Array(scores.length), () => Array(scores.length))
  
  // 자신이 받은 점수 구분
  for (let i = 0; i < scores.length; i++) {
      for (let j = 0; j < scores.length; j++) {
          score[j][i] = scores[i][j]
      }
  }
  
  // 자신에게 준 점수가 자신이 받은 점수에서 유일한 최솟값 또는 최댓값이라면 빼고 평균 계산 후 등급 구하기
  for (let i = 0; i < score.length; i++) {
      const my_score = score[i][i]
      const min = Math.min(...score[i])
      const max = Math.max(...score[i])
      
      const is_min_or_max = my_score === min || my_score === max
      const is_unique = score[i].filter(v => v === my_score).length === 1
      
      if (is_min_or_max && is_unique) {
          score[i].splice(i, 1)
      }
      
      const len = score[i].length
      const sum = score[i].reduce((acc, cur) => acc + cur, 0)
      const average = sum / len
      
      let grade = ''
      
      if (90 <= average) {
          grade = 'A'
      } else if (80 <= average && average < 90) {
          grade = 'B'
      } else if (70 <= average && average < 80) {
          grade = 'C'
      } else if (50 <= average && average < 70) {
          grade = 'D'
      } else {
          grade = 'F'
      }
      
      answer += grade
  }
  
  return answer;
}