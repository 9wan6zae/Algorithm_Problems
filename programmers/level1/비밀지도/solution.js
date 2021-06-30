function solution(n, arr1, arr2) {    
  return arr1.map((v, i) => combine(n, v, arr2[i]).replace(/1|0/g, s => +s ? '#' : ' '));
}

const combine = (n, val1, val2) => {
  return add_zero(n, (val1 | val2).toString(2))
}

const add_zero = (n, s) => {
  return '0'.repeat(n - s.length) + s
}