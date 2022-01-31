function solution(n, costs) {
  let answer = 0
  costs = costs.sort((a, b) => a[2] - b[2])
  const parent = Array.from({length: n}, (_, i) => i)
  
  const find = (parent, node) => {
      if (parent[node] === node) return node
      return parent[node] = find(parent, parent[node])
  }
  
  const union = (parent, to, from) => {
      to = find(parent, to)
      from = find(parent, from)
      
      if (to < from) {
          parent[from] = to
      } else {
          parent[to] = from
      }
  }
  
  const compare = (parent, to, from) => {
      return find(parent, to) === find(parent, from)
  }
  
  costs.forEach(([to, from, cost]) => {
      if (!compare(parent, to, from)) {
          answer += cost
          union(parent, to, from)
      }
  })
  
  return answer
}