function solution(n, s) {
  if (s < n) return [-1]
  
  const array = Array(n).fill(0).map(el => el = Math.floor(s / n));
  for (let i = n - 1; i >= n - (s % n); i--) {
      array[i]++;
  }
  return array;
}