function solution(s) {
  var answer = [];
  
  const strList = s.replace("{{", "").replace("}}", "").split("},{");
  
  const set = [];
  
  strList.forEach((v) => {
      set.push(v.split(','));
  })
  
  set.sort((a, b) => {
      return a.length - b.length;
  })
  
  set.forEach((v) => {
      const not_have_vals = v.filter((x) => !answer.includes(+x));
      not_have_vals.forEach((x) => answer.push(+x))
  })
  
  return answer;
}