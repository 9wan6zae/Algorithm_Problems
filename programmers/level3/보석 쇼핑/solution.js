function solution(gems) {
  let answer = [0, gems.length]
  let start = 0
  let end = 0
  
  const gem_kinds = new Set(gems).size
  const patial = new Map()
  
  patial.set(gems[start], 1)
  
  while (start < gems.length && end < gems.length) {
      // 일부분이 모든 종료의 보석을 가지고 있을 때
      if (patial.size === gem_kinds) {
          // 일부분이 이전 정답 후보의 길이보다 짧을 때 answer 갱신
          if (end - start < answer[1] - answer[0]) {
              answer = [start + 1, end + 1]
          }
          // 다른 정답이 될 수 있는 후보가 있을 수 있기에 start를 뒤로 미룸, 즉 start에 해당되는 보석의 개수를 하나 줄임
          patial.set(gems[start], patial.get(gems[start]) - 1)
          // 만약에 개수가 0이 되었으면 삭제
          if (patial.get(gems[start]) === 0) {
              patial.delete(gems[start])
          }
          start += 1
      } else {
          end += 1
          // end 포인터에 해당하는 보석을 추가하고, 이전의 보석이 있었다면 그 개수를 그렇지 않으면 0을 추가한다.
          patial.set(gems[end], 1 + (patial.get(gems[end]) || 0))
      }
  }
  
  return answer
}