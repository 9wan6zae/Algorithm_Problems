function solution(p) {
  var answer = '';
  
  const len = p.length;
  let left = 0;
  let right = 0;
  
  let is_valid = true;
  let is_balence = false;
  let index = 0;
  
  if (p.length === 0) return "";
  
  while (!is_balence) {
      p[index] === "(" ? left++ : right++;
      is_balence = left === right;
      index++;
  }
  
  let u = p.substr(0, index);
  let v = solution(p.substr(index));
  
  is_valid = u[0] === "(" && u[u.length - 1] === ")";
  
  if (is_valid) {
      answer = u + v;
  } else {
      answer = `(${solution(v)})` + reverse(u);
  }
  return answer;
}

function reverse(u) {
  let sub_u = u.substr(1, u.length - 2);
  u = "";
  for (let i in sub_u) {
      sub_u[i] === "(" ? u += ")" : u += "(";
  }
  return u;
}