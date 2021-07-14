function solution(arr) {
  var answer = 0;
  
  answer = arr.reduce((cur, acc) => get_lcm(cur, acc))
  
  return answer;
}

function get_gcd(a, b) {
  const r = a % b
  return r === 0 ? b : get_gcd(b, r)
}

function get_lcm(a, b) {
  return (a * b) / get_gcd(a, b)
}