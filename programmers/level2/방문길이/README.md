**출처**<hr>
level 2   
[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/49994)
<br>

**풀이**<hr>
현재 위치를 기록하는 `pos` 객체를 둡니다.
``` js
const pos = {
    x: 0,
    y: 0
}
```

문자열로 되어 있는 `dirs`를 `split` 메서드를 사용해 배열로 변경합니다. 그리고 `reduce`를 이용해 명령어에 따라 값이 갱신되도록 합니다. 초기값은 `Set()`으로 해 중복값이 안 생기도록 했습니다.
누적값으로 들어가는 값은 `현재위치`와 `갱신위치`인데 값이 작은 것이 앞으로 가게 합니다. 이를 각 명령어에 따라 다르게 설정한 후 `Set`의 `size`를 반환하였습니다.
``` js
return dirs.split('').reduce((acc, cur) => {
    if (pos.y < 5 && cur === 'U') {
        acc.add(`${pos.x}${pos.y}${pos.x}${pos.y + 1}`)
        pos.y++
    }
    if (pos.y > -5 && cur === 'D') {
        acc.add(`${pos.x}${pos.y - 1}${pos.x}${pos.y}`)
        pos.y--
    }
    if (pos.x < 5 && cur === 'R') {
        acc.add(`${pos.x}${pos.y}${pos.x + 1}${pos.y}`)
        pos.x++
    }
    if (pos.x > -5 && cur === 'L') {
        acc.add(`${pos.x - 1}${pos.y}${pos.x}${pos.y}`)
        pos.x--
    }
    return acc
}, new Set()).size
```