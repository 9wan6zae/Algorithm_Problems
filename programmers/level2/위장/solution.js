function solution(clothes) {
  var answer = 1;
  
  const types = {}
  
  for (let i = 0; i < clothes.length; i++) {
      const [, type] = clothes[i]
      !types[type] ? types[type] = 1 : types[type] += 1
  }
  for (let key in types) {
      answer *= types[key] + 1
  }
  answer -= 1;
  
  return answer;
}