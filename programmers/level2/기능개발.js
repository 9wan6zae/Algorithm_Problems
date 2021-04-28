function solution(progresses, speeds) {
  var answer = [];
  const len = progresses.length;

  while(progresses.length !== 0) {
      const len = progresses.length;
      let cnt = 0
      for (let i = 0; i < len; i++) {
          if (progresses[i] < 100) {
              progresses[i] += speeds[i];
          }
      }
      while(progresses[0] >= 100) {
          progresses.splice(0, 1);
          speeds.splice(0, 1);
          cnt++;
      }
      if (cnt > 0)
          answer.push(cnt);
  }
  return answer;
}