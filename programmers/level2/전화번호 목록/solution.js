function solution(clothes) {
  var answer = true;
  
  const hash = {};

  for (let i = 0; i < clothes.length; i++) {
    hash[clothes[i]] = clothes[i];
  }
  for (let i = 0; i < clothes.length; i++) {
    let temp = '';
    const cloth = [...clothes[i]];
    for (let j = 0; j < cloth.length; j++) {
      temp += cloth[j];
      if (hash[temp] && temp != clothes[i]) {
        answer = false;
        return answer;
      }
    }
  } 
  return answer;
}