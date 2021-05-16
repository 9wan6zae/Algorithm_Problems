function solution(name) {
  var answer = 0;
  
  const z = 'Z'.charCodeAt(0);
  const a = 'A'.charCodeAt(0);
  
  for (let i = 0; i < name.length; i++) {
      const z_closer = z - name[i].charCodeAt(0) + 1;
      const a_closer = name[i].charCodeAt(0) - a
      answer += Math.min(z_closer, a_closer);
  }
  const continuous_a_len = [0];
  for (let i = 0; i < name.length; i++) {
      if (name[i] === 'A' && name[i-1] !== 'A') {
          continuous_a_len.push(continuous_a(name.substr(i)) - (i-1));
      }
  }
  const min_move = name.length - Math.max(...continuous_a_len) - 1;
  
  answer += min_move;
  
  return answer;
}

function continuous_a(name) {
  let i;
  for (i = 0; i < name.length; i++) {
      if (name[i] !== 'A') break;
  }
  return i;
}