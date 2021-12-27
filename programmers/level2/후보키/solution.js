function solution(relation) {
  var answer = 0;
  const atts = relation[0].length
  
  let bitmasks = []
  
  for (let i = 0; i < (1 << atts); i++) {
      let bit = ''
      for (let j = 0; j < atts; j++) {
          if ((i & (1 << j)) !== 0) bit += j
      }
      bitmasks.push(bit)
      bit = ''
  }
  
  bitmasks.sort((a, b) => a.length - b.length)
  
  while(bitmasks.length) {
      const bitmask = bitmasks.shift().split('').map(Number)
      const set = new Set()
      
      relation.map(tuple => {
          let candidate = ''
          for (let i = 0; i < bitmask.length; i++) {
              candidate += tuple[bitmask[i]]
          }
          set.add(candidate)
      })
      if (set.size === relation.length) {
          answer += 1
          bitmasks = bitmasks.filter(b => !bitmask.every(v => b.includes(v)))
      }
  }
  
  return answer;
}