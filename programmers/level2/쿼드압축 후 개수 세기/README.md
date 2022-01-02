**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/68936)
<br>

**풀이**<hr>
배열을 4분할한 것을 `q1`, `q2`, `q3`, `q4`로 둡니다.
``` js
const len = arr.length,
    q1 = arr.splice(0, len/2),
    q2 = q1.map(row => row.splice(len/2, len/2)),
    q3 = arr,
    q4 = q3.map(row => row.splice(len/2, len/2));
```
4분할된 배열이 0 또는 1로만 구성되도록 재귀함수를 이용해 반복합니다. 만약, 0 또는 1로만 구성된다면 각각 [1, 0] 또는 [0, 1]을 반환하도록 해 기존 누적값에 더할 수 있게 합니다.
``` js
if (arr.every(row => row.every(cell => cell === 0))) return [1, 0];
if (arr.every(row => row.every(cell => cell === 1))) return [0, 1];
```
``` js
return [q1,q2,q3,q4].reduce((acc, q) => solution(q).map((d, i) => d + acc[i]), [0, 0]);
```