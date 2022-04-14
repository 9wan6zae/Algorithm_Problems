**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/43164)
<br>

**풀이**<hr>
모든 티켓을 사용해 그 경로를 표시하는 문제입니다. 같은 목적지인데 도착지가 여러 개일 경우 도착지 알파벳이 빠른 것이 먼저 갈 수 있어야 합니다. 티켓의 개수만큼 `visted` 배열로 만들어 해당 티켓을 사용했는지 확인하고 티켓을 목적지를 통해 경로를 저장합니다.

```js
const path = []
const visited = Array(tickets.length).fill(false)
```

알파벳 순으로 정렬하기 위해 `sort` 메서드를 사용합니다.

```js
tickets.sort()
```

문제에서 `ICN`부터 시작하기 때문에 `dfs(ICN, 0)`을 호출합니다. `dfs()`에서 첫 번째 인수는 도시 이름이고, 두 번째 인수는 호출된 횟수를 의미합니다. 호출된 횟수가 티켓의 개수와 같으면 모든 티켓을 사용했다는 것을 의미하기 때문입니다.

``` js
const dfs = (city, cnt) => {
    path.push(city)
    
    if (cnt === tickets.length) {
        return true
    }
    // 갈 수 있는 노드가 있는지 확인하고 없으면 path에서 제거
    for (let i = 0; i < tickets.length; i += 1) {
        const [src, des] = tickets[i]
        if (!visited[i] && city === src) {
            visited[i] = true
            // 끝까지 못한 티켓은 visited를 false로 다시 변경
            if (dfs(des, cnt + 1)) return true
            visited[i] = false
        }
    }
    path.pop()
    return false
}
```

이때 구해진 `path`를 반환해 문제를 해결했습니다.