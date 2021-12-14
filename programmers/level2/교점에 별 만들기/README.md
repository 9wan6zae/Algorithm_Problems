**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/87377)
<br>

**풀이**<hr>
문제에 두 선의 교점을 구하는 방법이 있어 아래와 같이 모든 조합의 교점을 구했습니다.
```js
for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
        const [A, B, E] = line[i]
        const [C, D, F] = line[j]
        
        const mod = A * D - B * C
        if (mod === 0) continue
        
        const xNumerator = B*F - E*D
        const yNumerator = E*C - A*F

        if (xNumerator % mod || yNumerator % mod) continue
        
        const x = (B*F - E*D) / mod
        const y = (E*C - A*F) / mod
        cross.push([x, y])

        right = Math.max(right, x)
        left = Math.min(left, x)
        top = Math.max(top, y)
        bottom = Math.min(bottom, y)
    }
}
```
top, bottom, right, left의 초기값은 각 극 값으로 하였습니다. 처음엔 문제를 잘못 해석해 극 값을 1001로 두었습니다.
```js
const INF = Number.MAX_SAFE_INTEGER;
let left = INF
let right = -INF
let top = -INF
let bottom = INF
```
두 선의 교점을 구하는 식에 의해 교점들`cross`와 사각형의 극 값을 구했다면 이를 이용해 `answer`의 배열의 크기를 정하고 정해진 좌표에 `'.'`을 `'*'`으로 바꾸면 됩니다.

`answer`는 아래와 같이 구성하였습니다.
```js
answer = [...Array(top - bottom + 1)].map(() => [...Array(right - left + 1)].map(() => '.'))
```

이제 `cross`의 원소의 특정 좌표를 `answer`의 값에 대응되도록 변경해야 하는데, 원소의 좌표가 `[0, 4]`이고, `top`이 `4` 그리고 `left`가 `-4`일 때, 이 좌표는 `[4, 0]`에 대응되어야 하므로 다음과 같이 정의할 수 있습니다.
```
cross의 좌표: [x, y]
answer의 좌표: [top-y, x-left]
```

즉, 아래 코드처럼 변환하였고
```js
cross.forEach(([x, y]) => {
    answer[top - y][x - left] = '*'
})
```

answer의 원소마다 `join` 메서드를 이용해 string으로 변경하고 반환하였습니다.

```js
answer = answer.map(a => a.join(''))
return answer;
```