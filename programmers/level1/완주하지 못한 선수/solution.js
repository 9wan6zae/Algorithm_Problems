function solution(participant, completion) {
  var answer = '';
  
  const participant_hash = {};
  
  for (let name of participant) {
      if (!participant_hash[name]) {
          const obj = {};
          obj.cnt = 1;
          participant_hash[name] = obj;
      } else {
          participant_hash[name].cnt++;
      }
  }
  
  for (let name of completion) {
      participant_hash[name].cnt--;
      if (participant_hash[name].cnt === 0) {
          delete participant_hash[name];
      }
  }
  
  answer = Object.keys(participant_hash)[0]
  
  return answer;
}