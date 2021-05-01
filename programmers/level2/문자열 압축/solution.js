function solution(s) {
  var answer = 0;
  const len = s.length;
  const repeat = parseInt(len / 2);

  let strSizes = [];

  if (len === 1) {
      return 1;
  }

  // 반복되는 사이즈는 문자열 길이의 반을 넘을 수 없음
  for (let i = 1; i <= repeat; i++) {
      const size = i;
      let cnt = 1;
      let str = '';
      for (let j = 0; j < len; j += size) {
          const curSubStr = s.substr(j, size);
          const nextSubStr = s.substr(j + size, size);
          const is_repeat = curSubStr === nextSubStr;
          if (is_repeat) {
              cnt++;
          } else { // curSubStr이 더 이상 반복되지 않는 경우 반복횟수에 따라 str 저장 후 cnt 초기화
              const num_of_repeat = cnt > 1 ? cnt : '';
              str += num_of_repeat + curSubStr;
              cnt = 1;
          }
      }
      const strSize = str.length;
      strSizes.push(strSize);
  }
  answer = Math.min(...strSizes);

  return answer;
}