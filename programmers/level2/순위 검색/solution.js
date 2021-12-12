function solution(info, query) {
  var answer = [];
  const map = {}
  
  const combination = (infos, score, map, pos) => {
      const key =infos.join('')
      const value = map[key]
      
      if (value) {
          map[key].push(score)
      } else {
          map[key] = [score]
      }
      
      for (let i = pos; i < infos.length; i++) {
          const dashArr = [...infos]
          dashArr[i] = '-'
          combination(dashArr, score, map, i+1)
      }
  }
  
  const binarySearch = (map, key, score) => {
      const scores = map[key]
      
      if (scores) {
          let start = 0
          let end = scores.length
          while(start < end) {
              const mid = Math.floor((start+end) / 2)
              if (scores[mid] >= score) {
                  end = mid
              } else {
                  start = mid + 1
              }
          }
          return scores.length - start
      } else {
          return 0
      }
  }
  
  info.forEach(i => {
      const infos = i.split(' ')
      const score = Number(infos.pop())
      combination(infos, score, map, 0)
  })
  
  for (let key in map) {
      map[key].sort((a, b) => a - b)
  }
  
  query.forEach(q => {
      const queries = q.replace(/ and /g, '').split(' ')
      const score = Number(queries.pop())
      answer.push(binarySearch(map, queries.join(''), score))
  })
  
  return answer;
}