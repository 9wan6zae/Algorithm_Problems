**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/68645)
<br>

**풀이**<hr>
삼각형은 반시계 방향으로 숫자가 증가하는 식으로 구성되어 있습니다. 왼쪽 아래 대각선, 오른쪽, 왼쪽 위 대각선 순입니다. 그리고 처음 채워지는 개수가 `n`이라면, 그 다음은 `n-1`, 그 다음은 `n-2` 씩 1씩 감소하며 채워지는 규칙이 있습니다.

n이 5일 때,   
왼쪽 아래 대각선에 5개가 채워짐   
`1`   
`2` 0   
`3` 0 0   
`4` 0 0 0   
`5` 0 0 0 0   

오른쪽으로 4개가 채워짐   
1   
2 0   
3 0 0   
4 0 0 0   
5 `6` `7` `8` `9`

그 다음으로, 왼쪽 위로 3개가 채워짐   
1   
2 `12`   
3 0 `11`   
4 0 0 `10`   
5 6 7 8 9   

이 규칙을 이용해 아래와 같이 코드를 작성할 수 있었습니다.

`answer`를 2차원 배열로 변경합니다.
``` js
const answer = Array.from({length: n}, (_, i) => new Array(i + 1).fill(0))
```

사용되는 변수들을 초기화합니다.
``` js
let count = 1
let row = -1
let col = 0
```

`n`이 0이 될 때까지 반복하면서 채우는 과정을 수행합니다.
``` js
for (let i = n; i > 0; i -= 3 ) {
    // 왼쪽 아래
    for (let j = 0; j < i; j++) answer[++row][col] = count++
    // 오른쪽
    for (let j = 0; j < i - 1; j++) answer[row][++col] = count++
    // 왼쪽 위
    for (let j = 0; j < i - 2; j++) answer[--row][--col] = count++
}
```

마지막으로 2차원 배열을 1차원으로 변경해 반환합니다.
``` js
return [].concat(...answer)
```
이 과정을 `answer.flat()` 또는 `answer.flatMap()`으로 할 수 있습니다. 하지만, 이 함수들은 `concat()`을 쓴 것보다 최적화가 안 되어 있다고 합니다.
