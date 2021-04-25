/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
*/
var wordBreak = function(s, wordDict) {
  let dp = Array(s.length); // 각 문자열의 위치 기준 어떤 문자들이 존재하는지 저장. 끝으로 갈 수록 문자들이 적어짐
  /**
   * 예를 들어
   * s = "catsanddog"
   * wordDict = ["cats", "and", "dog"] 일 때
   * dp[0] = ["cats and dog"]
   * dp[1] = []
   * dp[2] = []
   * dp[3] = []
   * dp[4] = ["and dog"]
   * dp[5] = []
   * dp[6] = []
   * dp[7] = ["dog"]
   * dp[8] = []
   * dp[9] = []
   * 가 됨
   */
  let map = {};
  for (let word of wordDict) {
    map[word] = true;
  }
  return find_word(s, map, dp, 0);
}

const find_word = function(s, map, dp, index) {
  if(dp[index]) return dp[index];

  let str = '';
  let tmp = null;
  const len = s.length;

  dp[index] = [];

  for (let i = index; i < len; i++) {
    // 잘린 문자열이 map에 있는지 확인
    str = s.slice(index, i + 1);
    if(!map[str]) continue;
    // 만약, 마지막 문자열이라면 push후 break
    if(i === len - 1) {
      dp[index].push(str);
      break;
    }
    // 뒤의 인덱스에서도 문자를 찾기 위해 함수 호출
    tmp = find_word(s, map, dp, i + 1);
    for (let val of tmp) {
      dp[index].push(str + " " + val);
    }
  }
  return dp[index];
};

const s = "catsanddog";
const wordDict = ["cat", "cats", "and", "sand", "dog"];

console.log(wordBreak(s, wordDict));