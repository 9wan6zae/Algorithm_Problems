**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/86971)
<br>

**풀이**<hr>
입력받은 `wires`를 통해 인접 노드간 연결 정보를 담은 이차원 배열 `adj`를 생성합니다.
```js
const adj = [...Array(n+1)].map(() => [...Array(n+1)].map(() => 0))

wires.forEach(([v1, v2]) => {
    adj[v1][v2] = 1
    adj[v2][v1] = 1
})
```

연결된 선을 하나씩 끊으면서 `dfs`를 이용해 갈 수 있는 노드 수를 `count`라 할 때, 분리된 한 쪽은 `count` 다른 한 쪽은 `n - count`가 되고 이 둘의 차가 가장 작을 것을 구해야 하기 때문에 이들의 차인 `n - count - count` = `Math.abs(n - 2*count)`를 이전 것과 비교해 작은 것을 계속 갱신하면 됩니다.

`dfs`는 특정 노드에서 갈 수 있는지와 방문했는지를 확인하고 재귀적으로 호출하면서 `count`를 올립니다.

```js
const dfs = (v) => {
    visit[v] = 1
    count++
    
    for (let i = 1; i <= n; i++) {
        adj[v][i] && !visit[i] && dfs(i)
    }
}
```