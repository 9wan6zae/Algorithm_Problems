/**
 * 백준 11726번 2xn 타일링
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
 
let dp = Array(1001);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
 
const answer = (val) => {
  dp[val] = (dp[val - 1] + dp[val - 2]) % 10007;
}
 
for (let i = 3; i <= input[0]; i++) {
  answer(i);
}
 
console.log(dp[input[0]]);