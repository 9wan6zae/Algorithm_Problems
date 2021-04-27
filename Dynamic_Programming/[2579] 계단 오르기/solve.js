/**
 * 백준 2579번 계단 오르기
*/
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./sample.txt').toString().trim().split('\n');

const len = +input[0];
input.splice(0, 1);

input = input.map(Number);

let dp = Array(len + 1);

dp[0] = input[0];
dp[1] = Math.max(input[1], input[0] + input[1]);
dp[2] = Math.max(input[0] + input[2], input[1] + input[2])

for (let i = 3; i < len; i++) {
  dp[i] = Math.max(input[i] + dp[i-2], input[i] + input[i - 1] + dp[i-3])
}

console.log(dp[len - 1]);
