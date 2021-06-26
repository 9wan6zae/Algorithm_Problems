function solution(dartResult) {
  var answer = 0;
  const scores = []
  
  const bonus = /^[SDT]$/
  const options  = /^[*#]$/
  
  let score = ''
  
  for (let i = 0; i < dartResult.length; i++) {
      const result = dartResult[i]
      if (bonus.test(result)) {
          if (result === 'D') score = (+score) ** 2
          else if (result === 'T') score = (+score) ** 3
          scores.push(+score)
          score = ''
      } else if (options.test(result)) {
          if (result === '*') {
              const last_score = scores.pop()
              if (scores.length !== 0) {
                  const temp = scores.pop()
                  scores.push(temp * 2)
              }
              scores.push(last_score * 2)
          } else {
              const last_score = scores.pop()
              scores.push(last_score * -1)
          }
      } else {
          score += result
      }
  }
  
  answer = scores.reduce((cur, acc) => cur + acc, 0)
  
  return answer;
}