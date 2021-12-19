**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/17679)
<br>

**풀이**<hr>
문제를 쉽게 풀기 위해 `string`으로 이루어진 배열을 `split`을 이용해 2차원 배열로 만듭니다.
``` js
board = board.map(v => v.split(''))
```

배열을 돌면서 현재 인덱스의 블록의 오른쪽, 아래 그리고 오른쪽 아래 대각선의 블록이 같다면 해당 인덱스를 `remove` 배열에 넣습니다.
``` js
const remove = []
for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
        board[i][j]
        && board[i][j] === board[i + 1][j]
        && board[i][j] === board[i][j + 1]
        && board[i][j] === board[i + 1][j + 1]
        && remove.push([i, j])
    }
}
```
만약, `remove`가 비어있다면 제거할 블록이 없는 상태이므로 `board`에서 0인 값을 세서 반환합니다.
``` js
if (!remove.length) {
    return board.reduce((acc, cur) => {
        return acc += cur.filter(v => !v).length
    }, 0)
}
```
그렇지 않다면, `remove`에 저장된 좌표들을 이용해 `board`의 특정 좌표를 0으로 변경합니다.
``` js
for (let pos of remove) {
    let [col, row] = pos
    board[col][row] = 0
    board[col][row + 1] = 0
    board[col + 1][row] = 0
    board[col + 1][row + 1] = 0    
}
```

0으로 변경된 값이 있으면, 상위 원소의 동일한 위치의 값과 바꾸는 과정을 수행합니다.
``` js
for (let i = m - 1; i > 0; i--) {
    if (!board[i].some(v => !v)) continue

    for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
            if (board[k][j]) {
                board[i][j] = board[k][j]
                board[k][j] = 0
                break;
            }
        }
    }
}
```