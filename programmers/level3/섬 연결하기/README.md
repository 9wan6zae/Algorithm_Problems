**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42861)
<br>

**풀이**<hr>
크루스칼 알고리즘을 이용해 문제를 해결했습니다. 크루스칼 알고리즘을 만들기 위한 필수 조건인 `정렬된 가중치`와 `각 노드별 부모 노드`를 선언합니다.
``` js
costs = costs.sort((a, b) => a[2] - b[2])
const parent = Array.from({length: n}, (_, i) => i)
```
초기엔 자기 자신이 부모 노드가 됩니다.

크루스칼 알고리즘은 `Union-Find` 알고리즘이 사용되기 때문에 이를 위한 함수로 선언합니다. `union()`은 입력으로 받은 노드의 부모를 찾고 그 중 한 쪽으로 합칩니다. 이 문제에선 노드가 작은 쪽으로 합쳤습니다. `find()`는 부모가 누구인지 찾는 함수인데, 최적화를 위해 재귀 함수를 사용했습니다. 만약 자기가 부모 노드이면 바로 반환하고, 그렇지 않다면 다시 `find()` 함수를 호출합니다.

``` js
const find = (parent, node) => {
    if (parent[node] === node) return node
    return parent[node] = find(parent, parent[node])
}

const union = (parent, to, from) => {
    to = find(parent, to)
    from = find(parent, from)
    
    if (to < from) {
        parent[from] = to
    } else {
        parent[to] = from
    }
}
```
크루스칼 알고리즘은 사이클을 만들면 안되기 때문에 2개의 노드의 부모를 확인해 같지 않으면 두 노드를 합칩니다. 이를 위해 `compare()` 함수를 만듭니다.
``` js
const compare = (parent, to, from) => {
    return find(parent, to) === find(parent, from)
}
```
정렬된 `costs`를 순회하며 위의 함수들을 이용해 문제를 해결합니다. `costs`의 원소를 `to`, `from`, `cost`로 분리한 후 `to`와 `from`의 부모가 같지 않다면, `answer`에 `cost`를 더합니다. 그리고 두 노드를 합칩니다.
```js
costs.forEach(([to, from, cost]) => {
    if (!compare(parent, to, from)) {
        answer += cost
        union(parent, to, from)
    }
})
```