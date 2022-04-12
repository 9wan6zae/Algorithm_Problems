**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/43162)
<br>

**풀이**<hr>
연결되어 있는 컴퓨터 그룹 개수를 반환하는 문제입니다. 먼저 컴퓨터의 개수에 해당하는 `n`만큼 배열을 만들어 방문한 컴퓨터인지를 확인할 수 있도록 합니다.

```js
let answer = 0
const visited = Array(n).fill(false)
```

`computers`를 통해 연결되어 있는 컴퓨터를 확인할 수 있기 때문에 이것을 `dfs` 알고리즘을 이용해 그룹을 확인합니다. 그리고 방문한 컴퓨터는 방문한 것이기 때문에 `visited`를 `false`로 만들어 다시 방문하지 못하도록 합니다.

``` js
const dfs = (node) => {
    visited[node] = true
    
    for (let i = 0; i <= n; i += 1) {
        computers[node][i] && !visited[i] && dfs(i)
    }
}

for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
        dfs(i)
        answer += 1
    }
}
```

이렇게 구한 `answer`를 반환합니다.