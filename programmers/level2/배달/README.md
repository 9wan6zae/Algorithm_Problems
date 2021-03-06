**출처**

[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12978)

**풀이**

이 문제는 1번 마을이라는 한 정점에서의 최단거리를 구하는 문제이기 때문에 다익스트라 알고리즘을 이용해 문제를 해결했습니다.

아래의 흐름으로 문제를 풀었습니다.

1. 입력받은 `N+1` 만큼 무한대 값을 가지는 배열 `distance`를 만듭니다. N+1을 하는 이유는 1번 인덱스를 1번 마을에 대응하기 위해서입니다.
2. 같은 이유로 `N+1`의 빈 배열을 가지는 배열`adj`를 만듭니다.
3. `road`를 [`start`, `to`, `time`]으로 분리하고 출발과 목적지에 따라 걸리는 시간을 할당합니다.
   ```js
   adj[start].push({to, time})   
   adj[to].push({to: start, time})   
   ```
4. 가장 빠른 시간을 가지는 노드인 1번 마을을 우선순위 큐`pq`에 넣은 후 distance[1]을 0으로 초기화합니다.
  ```js
  const pq = {to: 1, time: 0}
  distance[1] = 1
  ```
5. `pq`의 값이 없어질 때까지 아래의 과정을 반복합니다.
   1. 연결된 정점에서의 값이 현재의 값과 해당 정점의 시간의 합보다 클 경우, 연결된 정점에서의 값을 현재의 값과 해당 정점의 시간의 합으로 변경하고, 해당 정점을 `pq`에 추가
6. K 이하의 시간을 가지는 `distance` 개수 반환