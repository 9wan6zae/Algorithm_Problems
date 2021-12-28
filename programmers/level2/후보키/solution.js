function solution(relation) {
  var answer = 0;
  const atts = relation[0].length
  
  let bitmasks = []
  
  for (let i = 1; i < (1 << atts); i++) {
      let bitmask = ''
      for (let j = 0; j < atts; j++) {
          if ((i & (1 << j)) !== 0) bitmask += j
      }
      bitmasks.push(bitmask)
      bitmask = ''
  }
  
  bitmasks.sort((a, b) => a.length - b.length)
  
  while(bitmasks.length) {
      const bitmask = bitmasks.shift().split('').map(Number)
      const set = new Set()
      
      relation.map(tuple => {
          let candidate = ''
          for (let bit of bitmask) {
              candidate += tuple[bit]
          }
          set.add(candidate)
      })
      if (set.size === relation.length) {
          answer += 1
          bitmasks = bitmasks.filter(_bitmask => !bitmask.every(bit => _bitmask.includes(bit)))
      }
  }
  
  return answer;
}