function solution(sizes) {
  var answer = 0;
  
  let biggest_w = 0
  let biggest_h = 0
  
  for (let i = 0; i < sizes.length; i++) {
      let w = sizes[i][0]
      let h = sizes[i][1]
      
      if (w < h) {
          let temp = w
          w = h
          h = temp
      }

      if (w > biggest_w) biggest_w = w
      if (h > biggest_h) biggest_h = h
  }
  
  answer = biggest_w * biggest_h
  
  return answer;
}