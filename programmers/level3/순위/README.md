**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/49191)
<br>

**풀이**<hr>

`a`선수가 `b`선수를 이기고 `b`선수가 `c`선수를 이긴다면 `a`선수는 `c`선수를 이길 수 있습니다. 즉, 선수들의 관계를 그래프로 표현하고 플로이드 와샬을 이용해 간접적인 관계를 확인합니다. 초기 `graph`는 `n * n`의 크기만큼 할당하고 `n`의 크기만큼 `false`로 초기화시킵니다.

``` js
const graph = Array.from({length: n}, () => new Array(n).fill(false))
```

`false`의 의미는 다른 선수와의 관계를 확인할 수 있는가 입니다. 즉, 다른 선수와의 관게를 확인할 수 없으면 해당 값은 `false`가 될 것이면 `graph`의 원소 배열들 중 `false`가 없는 원소 배열의 개수를 반환하면 문제를 해결할 수 있습니다.

`results`를 순회하며 `graph`를 초기값으로 갱신합니다.

``` js
results.forEach(result => {
    let [winner, loser] = result
    
    winner -= 1
    loser -= 1
    
    graph[winner][loser] = 1
    graph[loser][winner] = -1
    graph[winner][winner] = 0
    graph[loser][loser] = 0
})
```

플로이드 와샬을 이용해서 다른 선수와 간접적인 관계를 확인하는데, 거리를 확인하는 것이 아니기 떄문에 크기 비교를 하는 것이 아니라 

> `a`선수가 `b`선수를 이기고 `b`선수가 `c`선수를 이긴다면, `a`선수는 `c`선수를 이긴다. 반대로 `a`선수가 `b`선수애게 지고 `b`선수가 `c`선수에게 진다면, `a`선수는 `c`선수에게 진다.

가 되도록 코드를 작성했습니다.

``` js
for (let mid = 0; mid < n; mid += 1) {
    for (let start = 0; start < n; start += 1) {
        for (let end = 0; end < n; end += 1) {
            if (graph[start][mid] === 1 && graph[mid][end] === 1) graph[start][end] = 1
            if (graph[start][mid] === -1 && graph[mid][end] === -1) graph[start][end] = -1
        }
    }
}
```

그리고 `graph`의 원소 배열에서 `false`가 없는 것의 개수를 반환했습니다.

``` js
return graph.filter(v => !v.includes(false)).length
```