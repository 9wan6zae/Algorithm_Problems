function solution(n, words) {
  var answer = [];

  const history = []
  
  let idx = 0
  
  for (let i = 0; i < words.length; i++) {
      const word = words[i]
      
      if (history.length === 0) {
          history.push(word)
      }
      else {
          const last_history = history[history.length - 1]
          
          const last_word = last_history.substr(last_history.length - 1)
          const first_word = word.substr(0, 1)
          
          if (history.indexOf(word) !== -1 || last_word !== first_word) {
              idx = i
              break
          } else {
              history.push(word)
          }
      }
  }
  
  if (idx === 0) {
      answer = [0, 0]
  } else {
      const player = idx % n + 1
      const order = Math.floor(idx / n) + 1
      answer = [player, order]
  }

  return answer;
}