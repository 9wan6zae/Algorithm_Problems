function solution(record) {
  var answer = [];
  
  let users = {};
  
  let history = [];
  
  for (let r of record) {
      const info = r.split(" ");
      const act = info[0];
      const uid = info[1];
      
      if (act === "Enter") {
          const nickName = info[2]
          if (!users[uid]) {
              users[uid] = new User(nickName, uid);
          } else {
              users[uid].changeNickName(nickName);
          }
          history.push([act, users[uid]]);
      } else if (act === "Change") {
          const nickName = info[2]
          users[uid].changeNickName(nickName);
      } else {
          history.push([act, users[uid]]);
      }    
  }
  
  for (let h of history) {
      if (h[0] === "Enter") {
          answer.push(`${h[1].nickName}님이 들어왔습니다.`);
      } else {
          answer.push(`${h[1].nickName}님이 나갔습니다.`);
      }
  }
  
  return answer;
}

class User {
  constructor(nickName, uid) {
      this.nickName = nickName;
      this.uid = uid
  }
  
  changeNickName(_nickName) {
      this.nickName = _nickName;
  }
}