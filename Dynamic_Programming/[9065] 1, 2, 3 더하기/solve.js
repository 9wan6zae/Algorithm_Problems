/**
 * 백준 9065번 1, 2, 3 더하기
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let dp = Array(12);
dp[0] = 0;
dp[1] = 1; // 1
dp[2] = 2; // 1 + 1, 2
dp[3] = 4; // 1 + 1 + 1, 1 + 2, 2 + 1, 3

const answer = (val) => {
  dp[val] = dp[val - 1] + dp[val - 2] + dp[val - 3];
}

for (let i = 4; i <= 11; i++) {
  answer(i);
}

input.splice(0, 1);
input.forEach((num) => {
  console.log(dp[Number(num)]);
});
