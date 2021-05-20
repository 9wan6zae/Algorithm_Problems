function solution(nums) {
  var answer = 0;
  let get_num = nums.length / 2;
  const set = new Set(nums);
  answer = Math.min(get_num, set.size);
  return answer;
}