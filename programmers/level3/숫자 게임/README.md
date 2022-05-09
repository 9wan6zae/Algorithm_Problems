**출처**<hr>
level 3   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12987)
<br>

**풀이**<hr>

`A`와 `B`를 오름차순으로 정렬한 후 `A` 배열의 인덱스 `indexA`와 `B` 배열으 인덱스 `indexB`를 선언하고 모두 0으로 초기화한다. `indexB`가 `B.length`보다 작을 때까지 아래를 반복한다.

1. `A[indexA] < B[indexB]`일 때 `answer`와 `indexA`를 1 증가한다.
2. `indexB`를 1 증가한다.

반복문이 종료되면 `answer`를 반환한다.