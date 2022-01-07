**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42888)
<br>

**풀이**<hr>
uid는 고정이지만 닉네임은 변경될 수 있기 때문에 uid를 키로 가지는 객체`users`를 만들어 값으로 닉네임을 넣는다면 문제를 해결할 수 있을 것이라고 생각했습니다. 그리고 들어오고 나오는 문구를 표시해야하기 때문에 `Change`를 제외한 다른 명령어`command`는 `history` 배열에 `[command, uid]`의 형태로 넣어줍니다. 그럼 `history`와 `users`를 이용하면 원하는 반환값을 얻을 수 있을 것입니다.

먼저, `record`를 순회해 `[command, uid, nickname]`의 형태로 분리하고 `command`가 `Change`가 아니라면 `history`에 `[command, uid]`의 형태로 넣어줍니다. 그리고 `Leave` 명령어인 경우엔 `nickname`이 없으므로 `nickname`이 있다면 `users[uid]` 값을 `nickname`으로 갱신합니다.
``` js
record.forEach((v) => {
    const [command, uid, nickname] = v.split(' ')

    if (command !== 'Change') {
        history.push([command, uid])
    }
    if (nickname) users[uid] = nickname
})
```
마지막으로 `history`를 순회하며 적절한 문구를 출력하면 되는데 `message`라는 함수를 만들어 `history`의 원소를 매개변수로 받아 `command`의 값에 따라 적절한 문구를 반환하도록 했습니다.
``` js
const message = ([command, uid]) => {
    return `${users[uid]}님이 ${command === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
}

return history.map(v => message(v))
```