function solution(w, h) {
  var answer = 1;
  
  const maxVal = Math.max(w, h);
  const minVal = Math.min(w, h);
  
  const gcd_val = gcd(minVal, maxVal);
  
  const remove_square = w + h - gcd_val;
  
  answer = w * h - remove_square;
  
  return answer;
}

function gcd(minVal, maxVal) {
  const r = minVal % maxVal;
  return r === 0 ? maxVal : gcd(maxVal, r);
}