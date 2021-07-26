function solution(msg) {
  var answer = [];
  
  const index = ['_']
  
  for (let i = 0; i < 26; i++) {
      index.push(String.fromCharCode(65+i))
  }
  
  while(msg.length) {
      let w = ''
      let wc = ''
      
      let i = 0
      
      for (i = 0; i < msg.length; i++) {
          w = msg.slice(0, i)
          wc = msg.slice(0, i+1)
          
          if (index.indexOf(wc) === -1) {
              answer.push(index.indexOf(w))
              break
          }
          
          if (i === msg.length - 1) {
              answer.push(index.indexOf(wc))
          }
      }
      index.push(wc)
      msg = msg.slice(i)
  }
  
  return answer;
}