**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/49189)
<br>

**풀이**<hr>
1번 노드에서 가장 멀리 떨어진 노드의 개수를 구하는 문제입니다. 문제를 풀기 위해 아래의 단계를 생각했습니다.   
1. `edge`를 통해 그래프`graph`를 만들기
2. `graph`를 통해 다른 노드와 1번 노드의 거리`distance` 구하기
3. `distance`에서 가장 먼 거리를 찾고, 그 거리를 가지는 노드의 개수 반환하기

1번은 `edge`를 이용해 노드간 연결관계를 보여는 `graph` 변수를 만드는 것입니다. 먼저 `n + 1` 크기에 빈 배열을 가지는 배열인 `graph`를 만듭니다.
``` js
const graph = Array.from(Array(n + 1), () => [])
```
그리고 `edge`의 값을 통해 연결관계를 기입합니다. 양방향이기 때문에 `src -> des`와 `des -> src`인 경우 모두 기입합니다.
``` js
edge.forEach(([src, des]) => {
    graph[src].push(des)
    graph[des].push(src)
})
```

2번은 `graph`를 이용해 다른 노드와 1번 노드와의 거리를 구하는 것입니다. 같은 레벨일 땐 같은 거리를 가지기 떄문에 너비 우선 탐색인 `BFS`를 이용하기로 했습니다. 그래서 `Queue`를 통해 구현했습니다. 먼저, 거리와 방문했는지의 여부를 확인하는 `distance`를 `n+1` 크기로 만들고 1번 인덱스엔 1로 설정합니다.
``` js
const distance = Array(n + 1).fill(0)
distance[1] = 1
```
1번 노드부터 방문하기 때문에 `queue`에 1번 노드를 넣어두고 순회합니다. `shift` 메서드를 통해 `queue`의 첫 번째 요소를 꺼냅니다. `shift` 메서드는 시간복잡도가 `O(n)`이 걸리지만 특정 자바스크립트 엔진일 경우 배열의 원소가 상대적으로 적을 경우 최적화를 해준다고 해서 사용했습니다. 가능하면 `Queue`를 직접 구현하는 것이 좋다고 합니다. `queue`에서 꺼낸 노드에서 연결된 노드가 방문하지 않았다면 `queue`에 넣고 거리를 꺼낸 노드에 1을 더한 값으로 갱신합니다.
``` js
const queue = [1]
while(queue.length) {
    const src = queue.shift()
    graph[src].forEach(des => {
        if (distance[des] === 0) { // 방문한 적이 없다면
            queue.push(des)
            distance[des] = distance[src] + 1
        }  
    })
}
```

3번은 가장 먼 거리를 찾고 이 거리를 가진 노드의 개수를 구하는 것입니다. 가장 먼 거리는 `Math.max()`를 이용해서 구하고, `filter`를 이용해 `distance`에 이 거리를 가진 노드를 구한 후 `length`를 이용해 개수를 반환합니다.
``` js
const max = Math.max(...distance)
return distance.filter(v => v === max).length
```